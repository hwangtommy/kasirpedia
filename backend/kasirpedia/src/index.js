const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = process.env.PORT;
dotenv.config();

app.listen(PORT, () => {
    console.log(`API IS RUNNING ON PORT ${PORT}`);
})