'use strict'

const config = require('../config')
const store = require('../store')

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


const createGame = function (data) {
  console.log("creating game: ", data)


  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data,
  })
}



const updateGame = function (data) {
  console.log("update info: ", data)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id ,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })}


const viewGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.games.id ,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const allGames = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games?over=true',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signup,
  signin,
  changePassword,
  signout,
  updateGame,
  createGame,
  viewGame,
  allGames
}
