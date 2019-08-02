port=process.env.PORT|| 8080;
express=require("express");

router=require("./controllers/burgers_controllers.js");
exphbs=require("express-handlebars");

app=express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(router);

app.listen(port,function(){
    console.log("server listening on port ",port)
});