// ==================================================
// Question 1

// Have a paragraph. On click of a button,
// alert the text in the paragraph

function ques_1() {
  alert("Welcome, This is a DOM Practice Alert Box!");
}
// ==================================================
// Question 2

// Have a paragraph. On click of a button,
// change the backgroundColor and text color of the paragraph

function color_Change() {
  var a = document.getElementById("para2");
  a.innerHTML = "This is Para 2";
  a.style.backgroundColor = "rgba(221, 175, 175, 0.582)";
  a.style.color = "rgb(94, 92, 92)";
}
// ==================================================
// Question 3

// Have two text boxes. On click of a button, get the
// value from the first text box and assign that value
// to the second text box

function exchange_Text_1() {
  var a = document.getElementById("text_value_1").value;
  document.getElementById("text_value_2").value = a;
  document.getElementById("text_value_1").value = "";
}

function exchange_Text_2() {
  var a = document.getElementById("text_value_2").value;
  document.getElementById("text_value_1").value = a;
  document.getElementById("text_value_2").value = "";
}

// ==================================================
// Question 4

//Have an image
// On click of a button, replace the image with another image.
// b. On click of a button, hide the image
// c. On click of a button, show the image

function get_image() {
  var a = document.getElementById("image_tada");
  if (a.style.display === "block") {
    a.style.display = "none";
  } else {
    a.style.display = "block";
  }
}

function change_image() {
  var a = document.getElementById("image_tada");
  if (
    a.src ==
    "https://i.gifer.com/origin/f9/f9569ddf6036073757f640790ee9bf75.gif"
  ) {
    a.src =
      "https://i.gifer.com/origin/f9/f9569ddf6036073757f640790ee9bf75.gif";
  } else {
    a.src =
      "https://i.gifer.com/origin/f9/f9569ddf6036073757f640790ee9bf75.gif";
  }
}

// ===========================================================
// Question 5

//

var imageArr = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.png'];

var sliderImg = document.getElementById("imageSlider");
var currentElem = 0;

function prevImage() {
  if (currentElem <= 0) currentElem = imageArr.length;
  currentElem--;
  return setImage();
}

function nextImage() {
    if (currentElem >= imageArr.length - 1) currentElem = -1;
    currentElem++;
    return setImage();
}

function setImage(){
    return sliderImg.setAttribute('src', 'images/' + imageArr[currentElem])
}

// ============================================================
// Form Validation
// Create a form with First Name, Last Name, radio buttons for Gender 
// (Male and Female), drop down menu for State, 
// a check box for I ACCEPT and a submit button. 
// At the click of submit button, the following should be validated.

// 1. If the First Name and Last Name fields are left blank or has a number, the background color of the text box should change to red color.
// 2. If the Gender is not selected, alert the user to select at least one option.
// 3. If the State is not selected, alert the user to select a state.
// 4. If the check box is not selected, alert the user to check the box.

function validateForm() {
    var a = document.getElementById("fname").value;
    var b = document.getElementById("lname").value;
    var c = document.getElementsByClassName("gender").value;
    var d = document.getElementById("selectState").value;
    var e = document.getElementById("terms").value;
    // if (a === "" ) {
    //   alert("First Name must be filled out");
    //   return false;
    // } 
    if(document.getElementById('fname').value=="") {
        alert("enter something valid");
        return false;
    }
  }