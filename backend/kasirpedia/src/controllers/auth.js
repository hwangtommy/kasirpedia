const db = require('../models');
const { Op } = require('sequelize');
const User = db.user;
const { sequelize } = require('../models');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const authController = {
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
        isAdmin: false,
        status: true,
      };

      const result = await User.create({ ...data });
      delete result.dataValues.password;

      //data
      //secret key
      // const token = await jwt.sign({ ...result.dataValues }, process.env.secret, {
      //   expiresIn: '5m',
      // });
      await t.commit();

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

  getUsers: async (req, res) => {
    try {
      const id = req.params.id;

      const result = await User.findAll({
        attributes: ['id', 'username', 'name', 'email', 'isAdmin', 'status'],

        order: [['id', 'DESC']],
      });

      return res.status(200).json({
        message: 'fetched data users',
        result: result,
      });
    } catch (err) {
      return res.status(400).json({
        message: err,
      });
    }
  },

  editProfile: async (req, res) => {
    const id = req.params.id;
    const t = await sequelize.transaction();

    try {
      console.log(req.body);

      const { email, username } = req.body;
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

      console.log(isExist.dataValues);
      console.log(id);

      if (isExist && isExist.dataValues?.id != id) {
        throw new Error('email already registered');
      }

      console.log(req.body);

      const userData = {
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
      };

      const result = await User.update(userData, {
        where: {
          id: id,
        },
        // transaction: t,
      });

      // console.log(data.id);
      await t.commit();

      return res.status(201).json({
        message: 'user updated',
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

  aturStatus: async (req, res) => {
    const id = req.params.id;
    const t = await sequelize.transaction();

    try {
      //cek email
      const isExist = await User.findOne({
        where: {
          id: id,
        },
      });

      console.log(isExist.dataValues);
      console.log(id);

      const result = await User.update(
        { status: !isExist.dataValues.status },
        {
          where: {
            id: id,
          },
          // transaction: t,
        }
      );

      // console.log(data.id);
      await t.commit();

      return res.status(201).json({
        message: 'status updated',
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
  login: async (req, res) => {
    const { email, password } = req.body;
    const result = await User.findOne({
      where: {
        email: email
      }
    })

    if (!result){
      return res.status(400).json({
        message: "User not found"
      })
    }

    else{
      const check = bcrypt.compare(password, result.password)

      if (!check){
        console.log("abc")
        return res.status(400).json({
          message: "Wrong password"
        })
      }

      console.log("cba")
      return res.status(200).json({
        message: "Logged in",
        result: result
      })
    }
  }
};

module.exports = authController;
