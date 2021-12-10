const Data = require("../models/datamodel")

function graphfunction(req, res){
    Data.find({}, (err,foundData)=>{
        foundData.sort(function(a, b) {
            return parseFloat(a.height) - parseFloat(b.height);
        });

        let foundWeight=foundData.map(o=>o.weight);
        let foundHeight=foundData.map(o=>o.height);
        res.json({foundWeight:foundWeight, foundHeight:foundHeight});
    });
}

module.exports = {graphfunction}