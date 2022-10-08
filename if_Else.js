//=============================================
// If Else
// Question 1

//Write a program to prompt the user for age.
// If age is less than or equal to (<=) 14, alert "Not Allowed".
// If age is greater than 14 and less than 65, alert "Regular Price".
// If age is equal to 50, alert "Special discount".

function ageAlert(age) {
  if (age <= 14) {
    alert("Not Allowed");
  } else if (age === 50) {
    alert("Special Discount");
  } else if (age > 14 && age <= 65) {
    alert("Regular Price");
  } else {
    alert("Enter a number less than 65");
  }
}
// ageAlert(65);
//==================================================================
// Question 2

// Write a program to prompt the user for age. If age is equal to 14,
// alert "coupon 1". If age is equal to 21, alert "coupon 2". If age
// is equal to 30, alert "coupon 3". If age is equal to 50, alert "coupon 4".
// Else alert "No coupon".

function couponAge() {
  var age = prompt("Enter you're age please!");
  if (age == 14) {
    alert("Coupon 1");
  } else if (age == 21) {
    alert("Coupon 2");
  } else if (age == 30) {
    alert("Coupon 3");
  } else if (age == 50) {
    alert("Coupon 4");
  } else {
    alert("No Coupon");
  }
}
// couponAge();

//================================================
// Question 3

// Write a program to prompt the user to enter a day
// (like Monday, Tuesday, Wednesday, etc). Based on the value entered
// by the user, display a special dish. For example, if the user enters
// Monday then alert "Mondays, We serve Pasta". If the user enters Friday
// then alert "Fridays, we serve Tacos".

function dailyMenu() {
  var checkDay = prompt('Enter today\'s day, example: " Monday," "Tuesday?" ');
  if (checkDay == "Monday") {
    alert(checkDay + "s, We serve Pasta");
  } else if (checkDay == "Tuesday") {
    alert(checkDay + "s, We serve sandwich");
  } else if (checkDay == "Wednesday") {
    alert(checkDay + "s, We serve Burger");
  } else if (checkDay == "Thursday") {
    alert(checkDay + "s, We serve Sushi");
  } else if (checkDay == "Friday") {
    alert(checkDay + "s, We serve Tacos");
  } else if (checkDay == "Saturday") {
    alert(checkDay + "s, We serve Pizza");
  } else if (checkDay == "Sunday") {
    alert(checkDay + "s, We serve Steak");
  } else {
    alert("Enter correct Day");
  }
}
//dailyMenu();

//===========================================================

// Question 4 
// Write a program to prompt the user to enter a year (like 2011, 2012, 2010, etc). 
// Based on the value entered, display the movie that won the Oscars for that year. 
// Just write this for last 8 years. If he enters beyond last 8 years then alert the 
// user to enter between 2003-2012.
function oscarMovie(){
  var askYear = prompt("Enter year from 2003-2012");
  if(askYear == 2003){
    alert("The Lord of the Rings: The Return of the King")
  } else if (askYear == 2004){
    alert("The Aviator")
  }else if (askYear == 2005){
    alert("Capote")
  }else if (askYear == 2006){
    alert("The Departed")
  }else if (askYear == 2007){
    alert("Zodiac")
  }else if (askYear == 2008){
    alert("The Dark Knight")
  }else if (askYear == 2009){
    alert("The Hurt Locker")
  }else if (askYear == 2010){
    alert("Inception")
  }else if (askYear == 2011){
    alert("Moneyball")
  }else if (askYear == 2012){
    alert("The Dark Knight Rises")
  }else {
    alert("Enter number between 2003-2012")
  }
}

// oscarMovie();

//===============================================================

// Question 5 

// Write a program to prompt the user to enter the Grade of a student 
// (like A+, A, A-, B etc). Based on the value entered, display terms 
// like "Excellent", "Good Job", "Average" etc.

function chkGrade(){
  let grade = prompt("Enter you grade, example: A+, A, B, C")
  if (grade == "A+"){
    alert("Excellent")
  } else if(grade == "A"){
    alert("Good Job")
  } else if(grade == "B"){
    alert("Average")
  } else{
    alert("You need to study more...!")
  }
}
// chkGrade();