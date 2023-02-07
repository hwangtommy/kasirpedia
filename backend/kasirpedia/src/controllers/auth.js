const db = require('../models');
const { Op } = require('sequelize');
const User = db.user;
const { sequelize } = require('../models');
const bcrypt = require('bcrypt');

const authController = {
  register: async (req, res) => {
    const { email, password, username, isAdmin, password_confirmation, name } = req.body;

    //cek email
    const isExist = await User.findOne({
      where: {
        [Op.or]: [
          {
            username: username,
          },
          {
            email: email,
          },
        ],
      },
    });

    console.log(isExist);

    if (password.length < 9) {
      return res.status(400).json({
        message: 'password less than 8 digits',
      });
    }

    if (isExist) {
      return res.status(400).json({
        message: 'this email/username is already registered',
      });
    }

    if (password !== password_confirmation) {
      return res.status(400).json({
        message: 'password doesnt match the confirmation password',
      });
    }

    const hashPassword = bcrypt.hashSync(password, 10);
    const data = {
      username: username,
      name: name,
      email: email,
      password: hashPassword,
      isAdmin: isAdmin,
    };

    const result = await User.create({ ...data });

    res.status(200).json({
      message: 'new user has been created',
      result: result,
    });
  },

  registerV2: async (req, res) => {
    const t = await sequelize.transaction();
    try {
      console.log(req.body);

      const { email, password, username, name } = req.body;
      //cek email
      const isExist = await User.findOne({
        where: {
          [Op.or]: [
            {
              username: username,
            },
            {
              email: email,
            },
          ],
        },
      });

      // console.log(isExist);

      if (isExist) {
        throw new Error('email already registered');
      }

      const hashPassword = bcrypt.hashSync(password, 10);
      const data = {
        username,
        email,
        password: hashPassword,
        name,
      };

      const result = await User.create({ ...data });
      delete result.dataValues.password;

      //data
      //secret key
      const token = await jwt.sign({ ...result.dataValues }, process.env.secret, {
        expiresIn: '5m',
      });
      await t.commit;

      return res.status(201).json({
        message: 'new user registered',
        result: result,
      });
    } catch (err) {
      await t.rollback();

      console.log(err);
      res.status(400).json({
        message: err.toString(),
      });
    }
  },
};

module.exports = authController;
