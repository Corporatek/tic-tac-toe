'use strict'

const anyBoggle = (rank, tray, coords) =>
  coords.map(c => tray[c[0] * rank + c[1]]).join('')

const boggle = (tray, coords) => anyBoggle(3, tray, coords)

// const bigBoggle = (tray, coords) => anyBoggle(5, tray, coords)

// const superBigBoggle = (tray, coords) => anyBoggle(6, tray, coords)

// OR

// function name: boggle4x4
// parameters: an array as the tray parameter and an array as the coordPairs parameter
// returns: a string
const boggle3x3 = function (tray, coords) {
  // start with an empty string to build out our word
  let word = ''

  // loop through all the coordinate pairs
  // each pair is called point in the loop
  coords.forEach((point) => {
    // get the y coordinate
    const y = point[0]

    // get the x coordinate
    const x = point[1]

    // get the index of where the coordinates point to in our tray
    const index = 3 * y + x

    // get the letter in that position of our tray
    const letter = tray[index]

    // add the letter to the word we are building
    word += letter
  })

  // after we are done looping through all the coordinates
  // return the word we built
  return word
}

const myTray = 'dibtloamb'.split('')

const myCoords = [
      [0, 0],
      [1, 1],
      [2, 2],
]

boggle3x3(myTray, myCoords) // "dogs"

boggle3x3(2,2)

module.exports = {
  boggle,
  boggle3x3
}

// Why does this work?
//
// This is our array
// ```
//  ["d", "i", "b", "t", "l", "o", "a", "m", "b", "c", "g", "r", "u", "m", "p", "s"]
// ```
// We think of it in terms of a 3 x 3 grid (a game board).
// ```
// d  i  b  t
// l  o  a  m
// b  c  g  r
// u  m  p  s
// ```
// With positions
// ```
// 0  1  2  3
// 4  5  6  7
// 8  9  10 11
// 12 13 14 15
// ```
// To get the word we are given coordinates to each letter.
// The the coordinate `0, 0` would give us `d` at index `0`.
// The the coordinate `1, 1` would give us `o` at index .
// The the coordinate `2, 2` would give us `g`.
// And the coordinates `0,0`, `1,1` and `2,2` would give us `dog`.
//
// To get the letter, we need to get an index using the coordinates.
// So to get the row we use the y coordinate and multiply it by # of rows
// ```
// 3 * y
// ```
// That will be equal to either
// ```
// 0
// 4
// 8
// 12
// ```
// Then we add the x coordinate to move over to the correct column
// ```
// 3 * y + x
// ```
// So if the coordinate is `2, 2` then first we do `4 * y` which is `4 * 2` and get
// ```
// 0
// 4
// *8*
// 12
// ```
// Then we add do `8 + x` which is `8 + 2` and we get position
// ```
// 0
// 4
// 8  9  *10*  11
// 12
// ```
// Or
// ```
// d  i  b  t
// l  o  a  m
// b  c  *g*  r
// u  m  p  s
// ```
