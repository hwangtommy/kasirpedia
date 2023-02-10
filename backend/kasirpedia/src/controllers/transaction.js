const db = require("../models");
const { Op } = require("sequelize");
const { nanoid } = require('nanoid');
const { sequelize } = require("../models");
const Transactions = db.transaction;
const TransactionItems = db.transactionitem;

const transactionInvoices = {
    createTransation: async (req, res) => {
        const t = await sequelize.transaction();

        try {
            const { user_id, total_price, transaction_date, items } = req.body;
            const temp = JSON.parse(items)

            const rndm = nanoid(5);
            let date = new Date();
            date = date.toISOString().slice(0, 10).replace(/-/g, "");

            const trans_number = "TR" + date + rndm;
            const transaction = {
                invoice: trans_number,
                user_id: user_id,
                total_price: total_price,
                transaction_date: transaction_date,
            };

            const result = await Transactions.create({
                ...transaction
            }, { transaction: t })

            const arr = []
            temp.map(async (val) => {
                const transitem = {
                    product_id: val.id,
                    transaction_id: result.dataValues.id,
                    qty: val.qty,
                    price: val.price,
                }
                arr.push(transitem)
            })

            await TransactionItems.bulkCreate(
                arr
                , { transaction: t })

            await t.commit();

            return res.status(200).json({
                message: "success"
            });

        } catch (err) {
            await t.rollback();
            console.log(err);
            return res.status(400).json({
                message: err.toString()
            });
        }
    },
    transactionByDate: async (req, res) => {
        try {
            const q1 = new Date(req.query.q1);
            const q2 = new Date(req.query.q2);
            console.log('Hello World');
            const result = await Transactions.findAll({
                where: {
                    transaction_date: {
                        [Op.between]: [q1, q2]
                    }
                }
            });

            return res.status(200).json({
                result: result
            })

        } catch (err) {
            return res.status(400).json({
                error: err.message
            })
        }

    },
    transactionDaily: async(req, res) => {
        try{
            const result = await Transactions.findAll({
                order: [["transaction_date", "DESC"]],
                limit: 15
            });

            return res.status(200).json({
                message: "success",
                result: result
            })
        }
        catch(err){
            return res.status(400).json({
                error: err.message
            })
        }
    }
}

module.exports = transactionInvoices;