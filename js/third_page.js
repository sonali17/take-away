$(document).ready(function(){
$("h1").text(localStorage.getItem("location"));

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
  total+=cart_value;
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
    total+=cart_value;
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
  total+=cart_value1;
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
    total+=cart_value1;
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
  total+=cart_value2;
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
    total+=cart_value2;
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
  total+=cart_value3;
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
    total+=cart_value3;
});

// to represent data in cart table
   $(".cartIcon").click(function(){
        var td1 = $('<td></td>').text(localStorage.getItem('burger count'));
        var td2 = $('<td></td>').text(100);
        var td3 = $('<td></td>').text(localStorage.getItem('burger value'));
        var tableRow = $('<tr><td>Burger</td></tr>').append(td1, td2, td3);
        $('.table-heading').after(tableRow);
   
   
        var td4 = $('<td></td>').text(localStorage.getItem('pizza count'));
        var td5 = $('<td></td>').text(500);
        var td6 = $('<td></td>').text(localStorage.getItem('pizza value'));
        var tableRow1 = $('<tr><td>Pizza</td></tr>').append(td4, td5, td6);
        $('.table-heading').after(tableRow1);

        var td7 = $('<td></td>').text(localStorage.getItem('chicken count'));
        var td8 = $('<td></td>').text(600);
        var td9 = $('<td></td>').text(localStorage.getItem('chicken value'));
        var tableRow2 = $('<tr><td>Chicken</td></tr>').append(td7, td8, td9);
        $('.table-heading').after(tableRow2);

        var td10 = $('<td></td>').text(localStorage.getItem('fish count'));
        var td11 = $('<td></td>').text(650);
        var td12 = $('<td></td>').text(localStorage.getItem('fish value'));
        var tableRow3 = $('<tr><td>Fish</td></tr>').append(td10, td11, td12);
        $('.table-heading').after(tableRow3);

        var t1=(parseInt)(localStorage.getItem('burger value'));
        var t2=(parseInt)(localStorage.getItem('pizza value'));
        var t3=(parseInt)(localStorage.getItem('chicken value'));
        var t4=(parseInt)(localStorage.getItem('fish value'));
        total=t1+t2+t3+t4;

        var tableRow4=$('<td></td>').append(total);
        $('.total-amount').after(tableRow4);
   });
  

});