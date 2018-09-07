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

const startGame = function (event) {
  event.preventDefault()
  console.log('game starting')

const data = {}
  api.createGame(data)
    .then(ui.gameCreateSuccess)
    // .then(function(){
    //   console.log(api.createGame().Response)
    // })
    .catch(ui.gameCreateFailure)
}

const getGames = function (event) {
  event.preventDefault()
  console.log('getting games')
  $('#game-history').css("display", "block")

const data = {}
  api.allGames(data)
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#restart').on('click', startGame)
  $('#getgame').on('click', getGames)
}




module.exports = {
  addHandlers

}
