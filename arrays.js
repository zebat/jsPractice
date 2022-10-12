//===========================================
// Question 1

// Write a program to display 10 quotes (one after the other in sequence).
// Hint: use Arrays to store the quotes (sayings).
// Name the function as displayQuotes.

function displayQuotes() {
  var sayings = [
    "Keep smiling, because life is a beautiful thing and there's so much to smile about!",
    "Life is a long lesson in humility",
    "Love the life you live",
    "Life is either a daring adventure or nothing at all",
    "Happiness is an uphill battle",
    "The purpose of our lives is to be happy",
    "Life is what happens when you're busy making other plans",
    "Trust yourself that you can do it and get it",
    "You must be the change you wish to see in the world",
    "Fortune favors the bold",
  ];
  // Answer for Question 1
  //   for(let i=0;i<sayings.length; i++){
  //     alert(sayings[i])
  //   }
  // Below is Question 2 answer
  displayQuotes_2(sayings);
  return sayings;
}
// displayQuotes();
//================================================================
// Question 2

// Create a function that accepts a parameter which is of the type Array and
// alerts the length of the array as well as the elements one after the other
// starting from 4th element. Call this function from displayQuotes function
// that you created in Question 1.

function displayQuotes_2(quotes) {
  var quotes;
  for (let i = 3; i <= quotes.length - 1; i++) {
    alert(
      "Length of an array " +
        quotes.length +
        " \n" +
        quotes[i] +
        " \n" +
        "Current Index: " +
        (quotes.indexOf(quotes[i]) + 1)
    );
  }
}
//====================================================================
// Question 3

// For the above created array, perform the following operations on an array.
var quotes = [
  "Keep smiling, because life is a beautiful thing and there's so much to smile about!",
  "Life is a long lesson in humility",
  "Love the life you live",
  "Life is either a daring adventure or nothing at all",
  "Happiness is an uphill battle",
  "The purpose of our lives is to be happy",
  "Life is what happens when you're busy making other plans",
  "Trust yourself that you can do it and get it",
  "You must be the change you wish to see in the world",
  "Fortune favors the bold",
];

var popArray = quotes.pop();
// a. pop()
//console.log(popArray);
// b. Now check the length and print it to console
//console.log(quotes.length)
// c. reverse()
var reverseArray = quotes.reverse();
//console.log(reverseArray)
// d. Now access the 8th array element and print it to console
//console.log(reverseArray[8])
// e. shift()
// console.log(reverseArray.shift())
// Now check the length and print it to console
// console.log(reverseArray.length)
// g. sort()
var sortArray = reverseArray.sort();
// console.log(sortArray)

// ====================================================================
// Question 4

// Prompt the user for appropriate values based on the operation that
// you are performing and then execute the following operations on the array:

function askUser() {
  var value = prompt("Enter a movie name");
  var dataArr = ["Grey Men", "12 Strong", "Minions"];
  // a. push() add to the end element of the array
  dataArr.push(value);
  // b. Now check the length and print it to console
  console.log(dataArr.length);
  console.log(dataArr);
  value = prompt("Enter another movie name");
  // c. unshift() add to the 1st index element of the array
  dataArr.unshift(value);
  console.log(dataArr);
  // d. Now check the length and print it to console
  console.log(dataArr.length);
  console.log(dataArr);
  // e. splice()
  // At position 2, remove 2 items:
  dataArr.splice(2, 1);
  console.log(dataArr);
  // f. Now check the length and print it to console. Now access the 5th array element and print it to console.
  console.log(dataArr.length);
  // g. slice()
  var newArr = dataArr.slice(2);
  console.log(newArr);
}
// askUser();

//============================================
// Question 7

// Ask for a prompt,
// If I enter ‘Monday’, in console display-  Tuesday’,’Wednesday’,’Thursday’,’Friday’and ‘Saturday.
// If I enter ‘Tuesday’,in console display ’Wednesday’,’Thursday’,’Friday’and ‘Saturday’.
// If I enter ‘Wednesday’,in console display ’Thursday’,’Friday’and ‘Saturday’.
// If I enter ‘Thursday’ , in console- ‘Friday’and ‘Saturday’.
// If I enter ‘Friday’, in console- ‘Saturday’.
// If I enter ‘Saturday,in console –‘Sunday’.
// If I enter ‘Sunday’, in console- it is the last day of the week.

function findDay() {
  var input = prompt("Enter current day of the week");
  var weekArr = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  var arrIndex = weekArr.indexOf(input);
  for (let i = arrIndex; i <= weekArr.length; i++) {
    if (input == "Sunday") {
      console.log("it is the last day of the week!");
    } else{
      console.log(weekArr[i])
    } 
  }
}

// findDay();
//============================================================
// Question 8 

//  Ask for a prompt, 
// if I enter ‘Monday’, in console display 
// ‘Tuesday’,’Wednesday’,’Thursday’,’Friday’,‘Saturday’ ,’Sunday’and ‘Monday’.
// When I enter ‘Tuesday’, in console display 
// ’Wednesday’,’Thursday’,’Friday’,‘Saturday’ ,’Sunday’ ‘Monday’ and ‘Tuesday’.
// When I enter ‘Wednesday’, in console display 
// ’Thursday’,’Friday’,‘Saturday’ ,’Sunday’, ‘Monday’,’Tuesday’ and ‘Wednesday’.
// When I enter ‘Thursday’, in console display 
// ’Friday’,‘Saturday’ ,’Sunday’,‘Monday’, ‘Tuesday’ and ‘Wednesday’.
// When I enter ‘Friday’, in console display 
// ‘Saturday’ ,’Sunday’,‘Monday’, ‘Tuesday’ ,‘Wednesday’,’Thursday’ and ‘Friday’.
// When I enter ‘Saturday’, in console display 
// ‘Sunday’,‘Monday’, ‘Tuesday’ ,‘Wednesday’,’Thursday’ and ‘Friday’ and ‘Saturday’.
// When I enter ‘Sunday’, in console display 
// ‘Monday’, ‘Tuesday’ ,‘Wednesday’,’Thursday’, ‘Friday’and ‘Saturday’.
function findAllDays() {
  var input = prompt("Enter current day of the week");
  var weekArr = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  var arrIndex = weekArr.indexOf(input);
  var newArr = []
  for (let i = arrIndex; i < weekArr.length; i++) {
    newArr.push(weekArr[i])
  } for(let i=0; i<arrIndex; i++){
    newArr.push(weekArr[i])
    } console.log(newArr)
}

 findAllDays();

 function find_all_color() {
  var input = prompt("Enter any color");
  var colorArr = ['yellow', 'red','green', 'blue','white','orange', 'black']
  var arrIndex = colorArr.indexOf(input);
  var newArr = []
  console.log(colorArr)
  for (let i = arrIndex; i <colorArr.length; i++) {
    newArr.push(colorArr[i])
    } for(let j=0; j<arrIndex; j++){
      newArr.push(colorArr[j])
    }    console.log(newArr)
}

 // find_all_color();
//=========================================================================
// Question 10

// Create two arrays, for every match between the 2 arrays,
// display an alert ‘there is a match’.

function matchArray() {
  var a = [1, 2, 3, 4];
  var b = [2, 43, 6, 3];
  for (let i = 0; i <= a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        console.log("Its a Match");
        console.log(a[i]);
      } else {
        console.log("Its not a Match");
      }
    }
  }
}

// matchArray()
