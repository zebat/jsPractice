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

function countNot() {
  var a = "Javascript notation %^&* notes that structure rules and not context for nothing";
  var b = a.split(' ');
  var count = 0;
  for (let i=0; i<b.length; i++){
    if("not" == b[i]){
        count++
    }

  } return console.log(count);
}

// countNot();

// b. Now, for the above problem 4, create an array with texts before
//     and after "not" occurrences.

function find_Next_Previous(){
  var a = "Javascript notation %^&* notes that structure rules and not context for nothing";
  var b = a.split(' ');
  var c = []
  for (let i = 0; i <b.length; i++){
    if("not" == b[i]){
      var previousEle = (b.indexOf(b[i]) -1)
      var nextEle = (b.indexOf(b[i]) + 1)
      c.unshift(b[previousEle])
      c.push(b[nextEle])
      console.log(c)
    }
  }

}

find_Next_Previous();
