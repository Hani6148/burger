// $(".add-burger").on("click",function(){
//     console.log("just clicked");

// });

console.log("hani is here");

$(document).on("click",".add-burger", function(){
    console.log("i clicked on ok");
    burger=$(".burger-input").val().trim();
data={name:burger,
devour:false};
console.log(data);
$.ajax("api/burger", {
    type: "POST",
    data: data
  }).then(
    function() {
        location.reload();
})
});

$(document).on("click",".devour", function(){
    console.log("i clicked on devour");
    id=$(this).attr("id");
    console.log(id)

$.ajax("api/burger/"+id, {
    type: "PUT",
    data: {devour:true}
  }).then(
    function() {
        location.reload();
})
})

$(document).on("click",".throw", function(){
    console.log("i clicked on delete");
    id=$(this).attr("id");
    console.log(id)

$.ajax("api/burger/"+id, {
    type: "DELETE",
    
  }).then(
    function(res) {
        console.log(res);
        location.reload();
})
})