// Variables

// Question 1
function var_ops_1() {
  var a = parseInt(prompt("Enter First Number"));
  var b = parseInt(prompt("Enter Second Number"));
  var c = a + b;
  var d = a * b;
  var e = a % b;
  alert("Addition of " + a + " + " + b + " = " + c);
  alert("Multiplication of " + a + " * " + b + " = " + d);
  alert("Module of " + a + " % " + b + " = " + e);
  document.getElementById("var_ops_li_pre1").style.display = "block";
}
//=================================================
// Question 2
function var_ops_2add() {
  var a = parseInt(prompt("Enter First Number"));
  var b = parseInt(prompt("Enter Second Number"));
  var c = a + b;
  alert("Addition of " + a + " + " + b + " = " + c);
}

function var_ops_2multiply() {
  var a = parseInt(prompt("Enter First Number"));
  var b = parseInt(prompt("Enter Second Number"));
  var c = a * b;
  alert("Multiplication of " + a + " * " + b + " = " + c);
}

function var_ops_2module() {
  var a = parseInt(prompt("Enter First Number"));
  var b = parseInt(prompt("Enter Second Number"));
  var c = a % b;
  alert("Module of " + a + " % " + b + " = " + c);
}

function var_ops_2() {
  var_ops_2add();
  var_ops_2multiply();
  var_ops_2module();
  document.getElementById("var_ops_li_pre2").style.display = "block";
}
//====================================================
// Question 3

function var_ops_3add(a, b) {
  return a + b;
}
function var_ops_3multiply(a, b) {
  return a * b;
}
function var_ops_3module(a, b) {
  return a % b;
}
function var_ops_3() {
  var a = parseInt(prompt("Enter First Number"));
  var b = parseInt(prompt("Enter Second Number"));
  alert("Addition = " + var_ops_3add(a, b));
  alert("Multiplication = " + var_ops_3multiply(a, b));
  alert("Module = " + var_ops_3module(a, b));
  document.getElementById("var_ops_li_pre3").style.display = "block";
}
//====================================================
// Question 4
var a = 10;
var b = 30;

function var_ops_4() {
  var a = 1;
  var b = 3;
  document.getElementById("var_ops_li_pre4").style.display = "block";
  return (c = alert("a = " + a + ", b = " + b));
}
//====================================================
// Question 5
var a = 40;
var b = 70;
function var_ops_5() {
  var a = 4;
  var b = 7;
  var c = a + b;
  var d = a * b;
  var e = a % c;
  document.getElementById("var_ops_li_pre5").style.display = "block";
  return alert(
    "a = " +
      a +
      "\n" +
      "b = " +
      b +
      "\n" +
      "a + b = " +
      c +
      "\n" +
      "a * b = " +
      d +
      "\n" +
      "a % b = " +
      e
  );
}
//===================================================
// Question 6
function var_ops_6subract() {
  var a = parseInt(prompt("Enter First Number"));
  var b = parseInt(prompt("Enter Second Number"));
  var c = a - b;
  alert("Subraction of " + a + " - " + b + " = " + c);
}

function var_ops_2divide() {
  var a = parseInt(prompt("Enter First Number"));
  var b = parseInt(prompt("Enter Second Number"));
  var c = a / b;
  alert("Divition of " + a + " / " + b + " = " + c);
}
function var_ops_6() {
  document.getElementById("var_ops_li_pre6").style.display = "block";
}
//===================================================
// Question 7
var a = 30;
a++;
var b = 20;
function add() {
  //console.log(a + b);
}
add();
a--;
function sub() {
  // console.log(a - b);
}
sub();
function multiply() {
  var a = 10;
 // console.log(a + b, +a - b, a / b, a * b, a % b);
}
multiply();
function var_ops_7() {
  document.getElementById("var_ops_li_pre7").style.display = "block";
}
//===================================================
// Question 8
function var_ops_8() {
  var fahrenheit = parseInt(prompt("Enter the Fahrenheit"));
  var celsius = ((fahrenheit - 32) * 5) / 9;
  alert(celsius + "\xB0C.");
  document.getElementById("var_ops_li_pre8").style.display = "block";
}
//===================================================
// Question 9
function var_ops_9() {
  alert("The name is set as : Bruce" + "\n" + "Name is displayed as : Wayne");
}

//======================
// Test
var str = "variable";
str == str.split(" ").reverse()

// console.log(str)

var str = function isPalindrome(string) {
    if (string == string.split('').reverse().join('')) {
        alert(string + ' is palindrome.');
    }
    else {
        alert(string + ' is not palindrome.');
    }
}

// str('variable')
