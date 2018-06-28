'use strict'

const config = require('../config')
const store = require('../store')
const index = require('/Users/newowner/desktop/tic-tac-toe/assets/scripts/index.js')

const signup = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data

  })
}

const signin = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data

  })
}

const changePassword = function (data) {
  console.log('date is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signout = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Below is the code that will log moves made to the console
// Needs work

const playerMove = function (move) {
  return $.ajax({
    url: config.apiUrl,
    method: 'POST',
    headers: {
      player: index.playerMove,
      square: index.getBox
    },
    data
  })
}

module.exports = {
  signup,
  signin,
  changePassword,
  signout
}
