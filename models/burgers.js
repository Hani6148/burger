var orm =require("../config/orm.js");

var burger={
allBurgers:function(callBack){
    orm.findAll("burger",callBack);
}
}

module.exports=burger;