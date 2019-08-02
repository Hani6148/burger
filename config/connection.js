mysql=require("mysql");



var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"hani",
    port:3306,
    database:"burger_db"

});

connection.connect(function(err){
if(err){
    console.log("error connecting:",err.stack);
    return
}
console.log("connected as id: ",connection.threadId);
});

module.exports=connection;