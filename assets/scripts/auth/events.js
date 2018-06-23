'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')


const data = getFormFields(this)
    api.signup(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

const data = getFormFields(this)
  api.signin(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran')

  const data = getFormFields(this)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('signed out!')

const data = getFormFields(this)
  api.signout(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

// Below is the intstructions for click events on the tic tac toe board


// The below statement is adding an X to the element if there is nothing occupying the box and changing the
// onlick attribute of each box to the myOFunction. If anything is in the box an alert will pop up saying
// the box is taken
var square = ""

function myXFunction() {
    var openSquare = document.getElementById("square");
    if ( openSquare = []) {
    document.getElementById("square").innerHTML = "X";
document.getElementById("button").setAttribute('onclick','myOFunction()');
    } else {
    alert("This square is taken");
    }
}

function myOFunction() {
    var openSquare = document.getElementById("square");
    if ( openSquare = []) {
    document.getElementById("square").innerHTML = "O";
    document.getElementById("button").setAttribute('onclick','myXFunction()');
    } else {
    alert("This square is taken");
    }
}








module.exports = {
  addHandlers
}
