//=====================================================
// Question 4
// Write a program to return the length of a string and also reverse
//"Pneumonoultramicroscopicsilicovolcanoconiosis".

var str = "Pneumonoultramicroscopicsilicovolcanoconiosis";

function strLength(ab) {
  var lenOfStr = ab.length
  var reveStr = ab.split('').reverse().join('')
  console.log( lenOfStr + " " + reveStr)
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

// find_Next_Previous();

// ===============================================================================

//Question 11. 
// There is a link: http://www.pro-tekconsulting.com/main/navigate/about&us/contactus/email/yourinfo.jsp
// a. Alert- ‘contact us’
// b. Alert- ‘your info’
// c. Have two text fields- Replace ‘navigate’ , ‘contact’ with whatever the user enters in the text
// field and hits ‘submit’
// d. Have 3 text fields- whatever you enter in those text fields should replace ‘prompt1’,’prompt2’
// and prompt3’.Then ‘alert’ that. After 3rd alert, the whole new link should come up.
// http://www.pro-tekconsulting.com/main/navigate/about&us/contactus/email/firstname=prompt1 & lastname=prompt&ph_no=prompt3”


