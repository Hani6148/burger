var express=require("express");
var router=express.Router();


var burger=require("../models/burgers.js");

router.get("/",function(req,res){
    burger.allBurgers(function(result){
        data=result;
        res.json(data);
    })
})

module.exports=router;