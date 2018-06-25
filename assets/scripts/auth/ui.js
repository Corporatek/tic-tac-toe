'use strict'

// const store = require('/Users/newowner/desktop/tic-tac-toe/assets/scripts/store.js')

console.log("Hi")

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign')
  $('#message').css('background-color', 'red')
  console.log('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.log('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').css('background-color', 'green')
  console.log('changePasswordSuccess ran and nothing was returned! ')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').css('background-color', 'red')
  console.log('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  console.log('signOutSuccess ran.')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error while signing out')
  $('#message').css('background-color', 'red')
  console.log('signOutFailure ran. Error is :', error)
}

// Below is the intstructions for click events on the tic tac toe board


// The below statement is adding an X to the element if there is nothing occupying the box and changing the
// onlick attribute of each box to the myOFunction. If anything is in the box an alert will pop up saying
// the box is taken
var square = ""

var openSquare = document.getElementById("square");


function myOFunction() {
    var openSquare = document.getElementById("square");
    if(openSquare.classList.contains('taken') || openSquare.innerHTML.indexOf("X") !== -1 || openSquare.innerHTML.indexOf("O") !== -1 ) {
          alert("Square is taken!")
      } else {
      document.getElementById("square").innerHTML = "O";
      document.getElementById("square").setAttribute('onclick','myXFunction()');
      document.getElementById("square").className = "taken";
    }
  }

function myXFunction() {
  var openSquare = document.getElementById("square");
  if(openSquare.classList.contains('taken') || openSquare.innerHTML.indexOf("X") !== -1 || openSquare.innerHTML.indexOf("O") !== -1 ) {
        alert("Square is taken!")
    } else {
    document.getElementById("square").innerHTML = "X";
    document.getElementById("square").className = "taken";
    document.getElementById("square").setAttribute('onclick','myXFunction()');
  }
}




module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  myXFunction,
  myOFunction
}
