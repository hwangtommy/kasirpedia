const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
const {cashierRoute, transactionRoute} = require("./routes");

const db = require("./models");
// db.sequelize.sync({ alter: true });

app.use("/cashier", cashierRoute);
app.use("/transaction", transactionRoute);

app.listen(PORT, () => {
    console.log(`API IS RUNNING ON PORT ${PORT}`);
});