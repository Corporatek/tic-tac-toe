'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  console.log('signUpSuccess ran. Data is :', data)
  var x = document.getElementById("game");
  var y = document.getElementById("sign-up");
  y.style.display = "none"
  x.style.display =  "block"
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
  
  var y = document.getElementById("sign-in");
  y.style.display = "none"
  $('#restart').css('display', 'block')
  $('#getgame').css('display', 'block')

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

const gameCreateSuccess = function (data) {
  console.log("successfully created new game", data)
  // BELOW STORES THE NEWLY CREATED GAME INFO
  store.game = data.game

  var x = document.getElementById("game");
  x.style.display =  "block"
}

const gameCreateFailure = function (error) {
  console.log("Failed to create new game")
}

const getGamesSuccess = function (data) {
  console.log("successfully got the last 5 games: ", data)
  // BELOW STORES THE NEWLY CREATED GAME INFO
  console.log(data.games[0])

for (var i = 0; i < data.games.length; i++){

  $('#game-info').append("<tr><td id="+ "game-id" + ">"+ data.games[i].id +"</td>" + "<td id="+ "game-over" + ">"+ data.games[i].over +"</td></tr>")

  // Add function to determine who the winner is.
  // $('#game-id').append("<td id="+ "game-id" + ">"+ data.games[i].id +"</td>")

}




}

const getGamesFailure = function (error) {
  console.log("Failed to get games")
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
  gameCreateSuccess,
  gameCreateFailure,
  getGamesFailure,
  getGamesSuccess
}
