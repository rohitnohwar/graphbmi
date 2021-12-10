const express=require("express");
const app = express.Router()
const {mainfunction} = require("../controllers/maincontroller")

app.post("/entry", mainfunction);

module.exports = app