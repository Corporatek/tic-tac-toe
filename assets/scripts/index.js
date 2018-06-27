'use strict'

const authEvents = require('./auth/events')
authEvents.addHandlers()


function startGame() {

for(var i = 1; i <= 9; i++) {
  clearBox(i)
}

  document.turn = "X"
  document.winner = null
  setMessage("Player " + document.turn + " gets to start.")
}

function setMessage(msg) {
  document.getElementById("text").innerText = msg;
}


function playerMove(square) {
  if (document.winner != null) {
    setMessage(document.turn + "  won!")
    alert(document.turn + " Wins!")
  } else if(square.innerText == ''){
  square.innerText = document.turn;
  switchTurn();
} else {
  alert("Spot is taken!")
}
}

function switchTurn() {
  if(checkForWinner(document.turn)) {
    setMessage("Congrats " + document.turn + ", you won!")
    document.winner = document.turn
  } else if(document.turn == "X") {
    document.turn = "O";
    setMessage("It's player " + document.turn + "'s turn now!")
  } else {
    document.turn = "X"
  }
  setMessage("It's player " + document.turn + "'s turn now!")
}

function checkForWinner(move) {
  var result = false
  if (checkRow(1, 2, 3, move) ||
      checkRow(4, 5, 6, move) ||
      checkRow(7, 8, 9, move) ||
      checkRow(1, 4, 7, move) ||
      checkRow(2, 5, 8, move) ||
      checkRow(3, 6, 8, move) ||
      checkRow(1, 5, 9, move) ||
      checkRow(3, 5, 7, move)) {
        result = true
      }
      return result
}



function checkRow(a, b, c, move) {
  var result = false
  if(getBox(a) == move && getBox(b) == move && getBox(c) == move) {
  result = true
  }
  return result
}

function getBox(number) {
  return document.getElementById("square" + number).innerText
}

function clearBox(number) {
  document.getElementById("square" + number).innerText = ""
}

// Below I am testing to see if this works for one box.
function changeColor() {
  var box = document.getElementById("square1")
  if(box.innerText = "X") {
    console.log("It worked")
    document.getElementById("square1").css("background-color", "green")
  }
}

// (module || {}).exports = EventEmitter;
//  = console.log("Hi")
