//=====================================================
// Question 4
// Write a program to return the length of a string
//"Pneumonoultramicroscopicsilicovolcanoconiosis".

var str = "Pneumonoultramicroscopicsilicovolcanoconiosis";

function strLength(ab) {
  return console.log(ab.length);
}

// strLength(str);

// =====================================================
// Question 10

// Find the number of times the string "not" appears in this sentence -
// a. " Javascript notation %^&* notes that structure rules and not
//      context for nothing"
// b. Now, for the above problem 4, create an array with texts before
//     and after "not" occurrences.

// using split

function countNot() {
  var a = " Javascript notation %^&* notes that structure rules and not context for nothing";
  var b = a.split(' ');
  var count = 0;
  for (let i=0; i<b.length; i++){
    if("not" == b[i]){
        count++
    }

  } return console.log(count);
}

// countNot();

