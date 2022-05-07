const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// defining port and calling express
const port = process.env.PORT || 5000;
const app = express();

// middle ware
app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.send("Runing Warehouse Server");
});
app.listen(port, () => {
  console.log("listening to port...");
});
