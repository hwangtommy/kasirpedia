const db = require("../models");
const { Op } = require("sequelize")

const Products = db.products;
const Categories = db.categories;

const cashierProducts = {
    getProducts: async (req, res) => {
        try {
            const q = req.query.q ? req.query.q : ""

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

    // searchProducts: async (req, res) => {
    //     try {
    //         const products = req.params
    //         const result = await Products.findAll({
    //             where: {
    //                 name: products
    //             }
    //         })

    //         return res.status(200).json({
    //             message: 'search data fetched',
    //             result: result
    //         })
    //     } catch(err) {
    //         return res.status(400).json({
    //             message: err
    //         })
    //     }
    // }

    addProducts: async (req, res) => {
        try{
            const data = {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                category_id: req.body.category_id
            }

            const dataEnt = Object.entries(data);
            dataEnt.map((val) => {
                if (!val[1]) {
                throw new Error(val[0] + " cannot be empty.");
                }
            });

            const result = await Products.create({ ...data });
            res.send(result);

        } catch (err) {
            return res.status(400).json({
                message: err
            });
        }
    },
    editProducts: async (req, res) => {
        try{
            const pid = req.query.product_id

            const data = {
                product_id: pid,
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                category_id: req.body.category_id
            }

            const dataEnt = Object.entries(data);
            dataEnt.map((val) => {
                if (!val[1]) {
                throw new Error(val[0] + " cannot be empty.");
                }
            });

            const result = await Products.update({ ...data });
            res.send(result);
        } catch (err) {
            return res.status(400).json({
                message: err
            });
        }
    },
    getCategory: async (req, res) => {
        try{
            const result = await Categories.findAll()

            return res.status(200).json({
                message: "Categories data fetched",
                result: result
        }) 
            } catch (err) {
                return res.status(400).json({
                    message: err
                })
        }
    },
    getProductsbyCategory: async (req, res) => {
        try{
            const cat = req.query.cat ? req.query.cat : ""

            const result = await Products.findAll({
                where: {
                    category_id: cat // Find category_id from category
                }
            })

            return res.status(200).json({
                message: 'data fetched',
                result: result
            });
        } catch (err) {
            return res.status(400).json({
                message: err
            })
        }
    },
    addCategory: async (req, res) => {
        try{
            const data = {
                name: req.body.name,
            }

            const dataEnt = Object.entries(data);
            dataEnt.map((val) => {
                if (!val[1]) {
                throw new Error(val[0] + " cannot be empty.");
                }
            });

            const result = await Categories.create({ ...data });
            res.send(result);

        } catch (err) {
            return res.status(400).json({
                message: err
            });
        }
    },
    editCategory: async (req, res) => {
        try{
            const cid = req.query.category_id

            const data = {
                category_id: cid,
                name: req.body.name
            }

            const dataEnt = Object.entries(data);
            dataEnt.map((val) => {
                if (!val[1]) {
                throw new Error(val[0] + " cannot be empty.");
                }
            });

            const result = await Categories.update({ ...data });
            res.send(result);
        } catch (err) {
            return res.status(400).json({
                message: err
            });
        }
    }
};

module.exports = cashierProducts;