'use strict'

const store = require('./../store')
// const events = require('./events')

const signUpSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Wahoo! Sign-up was successful!').show()
  $('#message').removeClass().addClass('success')
}

const signUpFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Oh no! Sign up failed. Try again!')
  $('#message').removeClass().addClass('failure')
}

const signInSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Alright! Time to play!').show()
  $('#message').removeClass().addClass('success')
  $('#signup').hide()
  $('#changepw').show()
  $('#newgame').show()
  $('#signout').show()
  console.log(response)
  store.user = response.user
  $('#signin').hide()
}

const signInFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Oh no! Sign in failed. Try again!')
  $('#message').removeClass().addClass('failure')
}

const changePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Password change success!').show()
  $('#message').removeClass().addClass('success')
  console.log(response)
}

const changePasswordFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Oh no! Password change failed. Try again!')
  $('#message').removeClass().addClass('failure')
}

const signOutSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Sign out success!').show()
  $('#message').removeClass().addClass('success')
  $('#signup').show()
  $('#signin').show()
  $('#changepw').hide()
  $('#signout').hide()
  $('#newgame').hide()
  $('#result').hide()
  $('#tracker').hide()
  $('#gameboard').hide()
}

const signOutFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Oh no! Sign out failed. Try again!')
  $('#message').removeClass().addClass('failure')
}

const newGameSuccess = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#message').text('New Game success!').show()
  $('#message').removeClass().addClass('success')
  store.game = response.game
  $('#result').show()
  $('#tracker').show().text("It is X's turn!")
  $('#gameboard').show()
}

const newGameFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Oh no! New Game failed. Ask the developer to fix the code!')
  $('#message').removeClass().addClass('failure')
}

const updateBoardSuccess = function (response, cell, player) {
  console.log(response, cell, player)
  store.game = response.game
  const cellVal = store.game.cells
  $('#message').text('Move recorded!').show()
  $('#message').removeClass().addClass('success')
  if (
    ((cellVal[0] === 'x' || cellVal[0] === 'o') && (cellVal[0] === cellVal[1] && cellVal[0] === cellVal[2])) ||
    ((cellVal[3] === 'x' || cellVal[3] === 'o') && (cellVal[3] === cellVal[4] && cellVal[3] === cellVal[5])) ||
    ((cellVal[6] === 'x' || cellVal[6] === 'o') && (cellVal[6] === cellVal[7] && cellVal[6] === cellVal[8])) ||
    ((cellVal[0] === 'x' || cellVal[0] === 'o') && (cellVal[0] === cellVal[3] && cellVal[0] === cellVal[6])) ||
    ((cellVal[1] === 'x' || cellVal[1] === 'o') && (cellVal[1] === cellVal[4] && cellVal[1] === cellVal[7])) ||
    ((cellVal[2] === 'x' || cellVal[2] === 'o') && (cellVal[2] === cellVal[5] && cellVal[2] === cellVal[8])) ||
    ((cellVal[0] === 'x' || cellVal[0] === 'o') && (cellVal[0] === cellVal[4] && cellVal[0] === cellVal[8])) ||
    ((cellVal[6] === 'x' || cellVal[6] === 'o') && (cellVal[6] === cellVal[4] && cellVal[6] === cellVal[2]))
  ) {
    $('#result').text(`${player} has won!`)
    $('#tracker').hide()
  } else {
    // test function named 'hasValue' that determines currentValue is either 'o' or 'x'
    const hasValue = (currentValue) => currentValue === 'o' || currentValue === 'x'
    // console log if the .every method is true or false after each move
    console.log(cellVal.every(hasValue))
    // if all values are either 'o' or 'x',
    if (cellVal.every(hasValue) === true) {
      // show result message
      $('#result').text('There is a tie!')
      $('#tracker').hide()
    }
  }
}

const updateBoardFailure = function (response) {
  $('#message').text('Move not recorded!').show()
  $('#message').removeClass().addClass('failure')
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
  newGameSuccess,
  newGameFailure,
  updateBoardSuccess,
  updateBoardFailure
}
