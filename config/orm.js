var connection = require("./connection.js");

var orm = {

    findAll: function(table,callBack){
    connection.query("select * from "+table+";",function(err,result){
        if(err){
            throw err;
        }
        callBack(result);
    })
    }
}

module.exports=orm;