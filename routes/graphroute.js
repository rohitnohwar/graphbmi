const express=require("express");
const app = express.Router()
const {graphfunction} = require("../controllers/graphcontroller")

app.get("/graphdata", graphfunction);

module.exports = app