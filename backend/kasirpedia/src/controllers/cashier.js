const db = require("../models");
const { Op } = require("sequelize");
// const {nanoid} = require('nanoid');
const Products = db.products;

const cashierProducts = {
    getProducts: async (req, res) => {
        try {

            const q=  req.query.q ? req.query.q : "";

            const result = await Products.findAll({ 
                where: {
                    name: {
                        [Op.like]: `%${q}%`
                    }
                }
            })

       
            return res.status(200).json({
                message: 'data fetched',
                result: result
            });
        } catch(err) {
            return res.status(400).json({
                message: err
            });
        }
    },
    // getProducts: async (req, res) => {
    //     try {
    //         const result = await Products.findAll()

    //         return res.status(200).json({
    //             message: 'data fetched',
    //             result: result
    //         });
    //     } catch(err) {
    //         return res.status(400).json({
    //             message: err
    //         });
    //     }
    // }
};

module.exports = cashierProducts;