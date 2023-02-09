const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

const { authRoute } = require('./routes');

const db = require('./models');
app.use('/auth', authRoute);

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`API IS RUNNING ON PORT ${PORT}`);
});
