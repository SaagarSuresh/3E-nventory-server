const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const inventory = require("./routes/inventory");

const PORT = process.env.PORT || 5050;

app.use(express.json());

app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));

app.use("/store", inventory);

app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
});