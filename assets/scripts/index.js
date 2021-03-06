'use strict'

const events = require('../scripts/auth/events')
const store = require('./store')
const api = require('./auth/api')

events.addHandlers()

function startGame() {

for(var i = 1; i <= 9; i++) {
  clearBox(i)
}

  document.turn = "X"
  document.winner = null
  document.over = false
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
    document.over = true
    console.log(document.over)
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
  $("#square" + a).css("color", "green")
  $("#square" + b).css("color", "green")
  $("#square" + c).css("color", "green")
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

function loadSignIn() {
  var x = document.getElementById("sign-in")
  var y = document.getElementById("sign-up")
  var z = document.getElementById("login")

  y.style.display = 'none'
  z.style.display = 'none'
  x.style.display = 'block'
}

$('.box').on('click', function(){
  // When the box is clicked , store the innerhtml into the cells array
  console.log(this.innerHTML)

  $(this).val(this.innerHTML)

var data = {
  "game": { 
  "cell": {
      "value": this.innerHTML,
      "index": $(this).attr('data-cell-index')
    },
  "over": document.over
  }

}

  console.log(data)
  // console.log(store)
  api.updateGame(data)  

  // Where the innerhtml gets stored must be associated with the location of the box starting from 0
})