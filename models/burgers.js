var orm =require("../config/orm.js");

var burger={
allBurgers:function(callBack){
    orm.findAll("burger",callBack);
},
createBurger:function(name,devour,callBack){
  orm.create("burger",name,devour,callBack)
},
devourBurger:function(bId,callBack){
    orm.update("burger",bId,callBack);

    
},
deleteBurger:function(bId,callBack){
orm.delete("burger",bId,callBack);
}
}

module.exports=burger;