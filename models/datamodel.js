const mongoose=require("mongoose");

const dataSchema=new mongoose.Schema({
    weight: {type:Number, required:true},
    height: {type:Number, required:true},
    result: {type:Number}
});

const Data = mongoose.model("Data", dataSchema);
module.exports = Data