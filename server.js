const express = require("express");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
