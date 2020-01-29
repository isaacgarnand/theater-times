// Business Logic
function Info() {
  this.ticketInfo = [];
  this.currentId = 0;
}

Info.prototype.addPurchase = function(input) {
  input.id = this.assignId();
  this.ticketInfo.push(input);
}

Info.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId
}

var information = new Info();

function Purchase(movie, time, age) { 
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Purchase.prototype.calculation = function() { 
  var price = "";
  if (time === "matenee") {
    price = 8;
  }
  else {
    price = 10;
  }
  if (age >= 60) {
    price * (0.9);
  }
  else if (age < 17 && movie === "diehard") {
    alert (" You must be over 17 to see this move")
  }
}

//UI logic
function Display(asdf) {
  var result = $("div#output")
  var stringResult = "";
  asdf.ticketInfo.forEach(function(qwerty) {
    stringResult += ticketInfo.movie + "Will be shown at " + time + " and tickets will be " + price;
  });
  result.text(stringResult);
}

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var movie = $("select#movie").val();
    var time = $("select#time").val();
    var age = $("input#age").val();
    var input = new Purchase(movie,time,age);
    information.addPurchase(input);
    Display(information);
  });
});

