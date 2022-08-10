var bat = document.getElementById("bat-qt")
bat.value = 0;
var ball = document.getElementById("ball-qt")
ball.value = 0;
var stump = document.getElementById("stump-qt")
stump.value = 0;
var batunitprice = document.getElementById("unit-price")
batunitprice.value = 1000;
// var unprice1 = batunitprice.value

var ballunitprice = document.getElementById("unit-price")
// ballunitprice.value = 100;
var unprice2 = ballunitprice.value

// var stumpunitprice = document.getElementById("unit-price")
// stumpunitprice.value = 500;
// var unprice3 = batunitprice.value
// price1.value = 0;
// price2.value = 0;
// price3.value = 0;
bat.addEventListener("click", battotal)
function battotal() {
   price1.value = ((bat.value) * (unprice1))
   document.getElementById("price1").innerHTML = price1.value
   cal()
}
ball.addEventListener("click", balltotal)
function balltotal() {
   price2.value = ((ball.value) * (unprice2))
   document.getElementById("price2").innerHTML = price2.value;
   cal()
}
stump.addEventListener("click", stumptotal)
function stumptotal() {
   price3.value = ((stump.value) * (unprice3))
   document.getElementById("price3").innerHTML = price3.value;
   cal()
  
}
function cal() {
   var tol = price1.value + price2.value + price3.value;
   tax = (tol * (18 / 100))
   grand = tol + tax;
   console.log(tol)
   console.log(tax)
   console.log(grand)

   document.getElementById("total-value").innerHTML = tol;
   document.getElementById("tax-value").innerHTML = tax;
   document.getElementById("grand-value").innerHTML = grand;
}