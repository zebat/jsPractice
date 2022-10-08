// ===================================
// Question 1
// Demonstrate all of the following in separate JavaScript file (each response should be in separate file):
function displayValue(param1, param2, param3) {
  alert(param1 + " " + param2 + " " + param3);
}
// a. How will you trigger the above method? Show at least 2 ways to call the function.
//displayValue("a");
//console.log(displayValue(2));
// b. How many parameters will you pass to the function above?
// Ans - 3
// c. Alert the parameter values inside the function.
// Ans -see the function
// d. What happens if you pass only 2 parameters and try to alert all 3 parameters?
// Ans - If a number is passed it prints - NAN for missing the 3rd number
// If string is passed it prints - undefined for the 3rd missing parameter

// e. What happens if one of the passed parameters is re-declared inside the function with a keyword var.
// It takes the new delared value and ignore the passed value
// f. What happens if you pass only 1 parameter and try to add all 3 parameters  such as:
//  Alert(param1 + “ “+ param2+ “ “+ param3);
// it take the other parameters as undefined

//===========================================================
// Question 2

// Here is the declaration of a function.
function setValue(fName, lName, age) {}
function setCustInfo(name) {
  alert("The name is set as : " + name);
}
function displayCustInfo(name) {
  alert("First Name is displayed as: " + name);
}
//setCustInfo("Bruce");
//displayCustInfo("Wayne")

// Demonstrate all of the following in separate JavaScript file (each response should be in separate file):
// a. How would I show the following output in alert boxes?
// i. The name is set as: Bruce
// ii. Name is displayed as: Wayne

// Show at least 2 ways to get the above output. (Hint: onclick and call inside js);

// b. Inside this setValue method, how will you trigger setCustInfo and  displayCustInfo methods?
// c. What if the variable “name”  is declared globally with a value? What will the output look like?
// d. In a separate JS file, try to declare the variable “name” locally with some value. What will the output look like?
// e. In a separate JS file, try NOT TO Pass the value to setCustInfo  from setValue function  - rather have the “name” variable globally with a value. What is the output?

