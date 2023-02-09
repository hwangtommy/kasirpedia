const db = require("../models");
const Products = db.products;

const cashierProducts = {
    getProducts: async (req, res) => {
        try {
            const result = await Products.findAll()

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
    searchProducts: async (req, res) => {
        try {
            const products = req.params
            const result = await Products.findAll({
                where: {
                    name: products
                }
            })

            return res.status(200).json({
                message: 'search data fetched',
                result: result
            })
        } catch(err) {
            return res.status(400).json({
                message: err
            })
        }
    }
};

module.exports = cashierProducts;