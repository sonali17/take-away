$(document).ready(function(){
$.ajax("http://acadprojects.com/py/fabsos/location?city_id=1", {
success: function(data) {
console.log("Location Loaded By Dom")
a = data.data;
for (i = 0; i < a.length; i++) {
  $(".location_list").append("<option class='option'>"+a[i]["location_name"]+"</option>");
}
},
error: function() {
 console.log("Location Error");
}
});

$.ajax("http://acadprojects.com/py/fabsos/cuisines?location_id=1", {
success: function(data) {
console.log("cuisines images loaded by Dom ")
cimg= data.cuisines;
for (i = 0; i<4; i++) {
 $("#cimg").after("<div class='item'><img src="+cimg[i]["image"]+" alt="+cimg[i]["cuisine_name"]+" id="+cimg[i]["id"]+" width=400px height=400px ></div>");
}
},
error: function() {
console.log("cuisines images error");
}
});

$(".button").click(function(){
loc = $(".form-control option:selected").val();

    console.log(loc);
    localStorage.setItem("location", loc);
    window.location.href = "file:///C:/Users/Sonali/Desktop/p3/second_page.html";
  

});

// second page starts here

$("h1").text(localStorage.getItem("location"));


// third page starts from here
$.ajax("http://acadprojects.com/py/fabsos/cuisines?location_id=1", {
success: function(cuisines) {
console.log("Cuisine Loaded By Dom")
b = cuisines.cuisines;
for (i = 0; i < b.length; i++) {
  $(".cuisine_list").append("<option class='cuisine_option'>"+b[i]["cuisine_name"]+"</option>");
}
},
error: function() {
 console.log("Cuisine Error");
}
});

});