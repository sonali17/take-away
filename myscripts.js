
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

total=0;
cart_value =0;
dish_count1 = 0;

$("#add1").click(function(){
  document.getElementById("qty").value++;
  dish_count1 = parseInt(document.getElementById("qty").value);
  cart_value =dish_count1*100;
  localStorage.setItem("burger value", cart_value);
  localStorage.setItem("burger count", dish_count1);
  console.log(000);
});

$("#subt1").click(function(){
    currrent_value =  parseInt(document.getElementById("qty").value);
    if (currrent_value < 1) {
        b=11
    } else {
        document.getElementById("qty").value--;
    }
    dish_count1 = parseInt(document.getElementById("qty").value);
    cart_value =dish_count1*100;
    localStorage.setItem("burger value", cart_value);
    localStorage.setItem("burger count", dish_count1);
});

// calculating cart value and quantity of pizza
cart_value1 =0;
dish_count2 = 0;

$("#add2").click(function(){
  document.getElementById("qty1").value++;
  dish_count2 = parseInt(document.getElementById("qty1").value);
  cart_value1 =dish_count2*500;
  localStorage.setItem("pizza value", cart_value1);
  localStorage.setItem("pizza count", dish_count2);
  console.log(000);
});

$("#subt2").click(function(){
    currrent_value =  parseInt(document.getElementById("qty1").value);
    if (currrent_value < 1) {
        b=11
    } else {
        document.getElementById("qty1").value--;
    }
    dish_count2 = parseInt(document.getElementById("qty1").value);
    cart_value1 =dish_count2*500;
    localStorage.setItem("pizza value", cart_value1);
    localStorage.setItem("pizza count", dish_count2);
});

// calculating cart value and quantity of chicken
cart_value2 =0;
dish_count3 = 0;

$("#add3").click(function(){
  document.getElementById("qty2").value++;
  dish_count3 = parseInt(document.getElementById("qty2").value);
  cart_value2 =dish_count3*600;
  localStorage.setItem("chicken value", cart_value2);
  localStorage.setItem("chicken count", dish_count3);
  console.log(000);
});

$("#subt3").click(function(){
    currrent_value =  parseInt(document.getElementById("qty2").value);
    if (currrent_value < 1) {
        b=11
    } else {
        document.getElementById("qty2").value--;
    }
    dish_count3 = parseInt(document.getElementById("qty2").value);
    cart_value2 =dish_count3*600;
    localStorage.setItem("chicken value", cart_value2);
    localStorage.setItem("chicken count", dish_count3);
});

// calculating cart value and quantity of fish
cart_value3 =0;
dish_count4 = 0;

$("#add4").click(function(){
  document.getElementById("qty3").value++;
  dish_count4 = parseInt(document.getElementById("qty3").value);
  cart_value3 =dish_count4*650;
  localStorage.setItem("fish value", cart_value3);
  localStorage.setItem("fish count", dish_count4);
  console.log(000);
});

$("#subt4").click(function(){
    currrent_value =  parseInt(document.getElementById("qty3").value);
    if (currrent_value < 1) {
        b=11
    } else {
        document.getElementById("qty3").value--;
    }
    dish_count4 = parseInt(document.getElementById("qty3").value);
    cart_value3 =dish_count4*650;
    localStorage.setItem("fish value", cart_value3);
    localStorage.setItem("fish count", dish_count4);
});

// to represent data in cart table
   
  

});
