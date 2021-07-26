require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const ejs=require("ejs");
const cors=require("cors");
const fs=require("fs");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine','ejs');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.URI, {useNewUrlParser:true, useUnifiedTopology: true});
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

const dataSchema=new mongoose.Schema({
    weight: {type:Number, required:true},
    height: {type:Number, required:true},
    result: {type:Number}
});

const Data = mongoose.model("Data", dataSchema);

app.post("/entry", (req, res)=>{
    const result=req.body.weight/(req.body.height**2);

    const newData= new Data({
        weight:req.body.weight,
        height:req.body.height,
        result:result
    });
    newData.save();
    res.json({result:result});
});

app.get("/graphdata", (req, res)=>{
    Data.find({}, (err,foundData)=>{
        foundData.sort(function(a, b) {
            return parseFloat(a.height) - parseFloat(b.height);
        });
        foundWeight=foundData.map(o=>o.weight);
        foundHeight=foundData.map(o=>o.height);
        res.json({foundWeight:foundWeight, foundHeight:foundHeight});
    });
});


const port = process.env.PORT || 3001;

if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"));

    app.get("*", function(req, res){
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(port, () => {
});