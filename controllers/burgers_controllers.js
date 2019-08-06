var express=require("express");
var router=express.Router();


var burger=require("../models/burgers.js");

router.get("/",function(req,res){
    burger.allBurgers(function(result){
        data={burger:result};

        res.render("index",data);
    })
});
router.post("/api/burger",function(req,res){
    console.log("just got a post")
    console.log(req.body.name,req.body.devour);
    
    burger.createBurger(req.body.name,req.body.devour,function(result){
        res.json({ id: result.insertId });
    })
})
router.put("/api/burger/:id",function(req,res){
    console.log("got put")
    bId=req.params.id;
    console.log(bId)
    burger.devourBurger(bId,function(result){
        if (result.changedRows == 0) {
  
            return res.status(404).end();
          } else {
            res.status(200).end();
          }

    })
})
router.delete("/api/burger/:id",function(req,res){
    console.log("delete received");
    bId=req.params.id;
    burger.deleteBurger(bId,function(result){
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
})

module.exports=router;