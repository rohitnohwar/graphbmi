const Data = require("../models/datamodel")

function mainfunction(req, res){
    const result=req.body.weight/(req.body.height**2);

    const newData= new Data({
        weight:req.body.weight,
        height:req.body.height,
        result:result
    });
    newData.save();
    res.json({result:result});
}

module.exports = {mainfunction}
