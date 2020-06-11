'use strict'

const store = require('./../store')
// const events = require('./events')
// let xWinCount = 0
// let oWinCount = 0
// let tieCount = 0
//
// $('#xWins span').text(`${xWinCount}`)
// $('#oWins span').text(`${oWinCount}`)
// $('#ties span').text(`${tieCount}`)

const signUpSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Sign Up success! Please sign in below.').show()
  $('#message').removeClass().addClass('success')
  $('.signin').show()
}

const signUpFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign Up failed. Try again!')
  $('#message').removeClass().addClass('failure')
}

const signInSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Sign In success!').show()
  $('#message').removeClass().addClass('success')
  $('.signup').hide()
  $('.signin').hide()
  $('.getsignoutbutton').show()
  $('.getsignupbutton').hide()
  $('getsignoutbutton').hide()
  $('.newgame').show()

  $('.getplayersinfobutton').show()
  console.log(response)
  store.user = response.user
}

const signInFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign In failed. Try again!')
  $('#message').removeClass().addClass('failure')
}

const signOutSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Sign Out success!').show().delay(600).fadeOut(1500)
  $('#message').removeClass().addClass('success')
  $('getplayersinfobutton').hide()
  $('getsigninbutton').hide()
  $('getsignupbutton').show()
  $('.signup').hide()
  $('.signin').show()
  $('.changepw').hide()
  $('.signout').hide()
  $('.newgame').hide()
  $('.tracker').hide()
  $('.gameboard').hide()
  $('.getgames').hide()
}

const signOutFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign Out failed. Try again!')
  $('#message').removeClass().addClass('failure')
}

const changePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Password Change success').show()
  $('#message').removeClass().addClass('success')
  console.log(response)
}

const changePasswordFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Password Change failed. Try again!')
  $('#message').removeClass().addClass('failure')
}

const newGameSuccess = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#message').text('New Game success!').show()
  $('#message').removeClass().addClass('success')
  store.game = response.game
  $('.tracker').show().text("It is X's turn!")
  $('.gameboard').show()
}

const newGameFailure = function () {
  $('form').trigger('reset')
  $('#message').text('New Game failed.')
  $('#message').removeClass().addClass('failure')
}

const updateBoardSuccess = function (response, cell, player) {
  console.log(response, cell, player)
  store.game = response.game
  const cellVal = store.game.cells
  $('#message').text('Move Recorded!').show()
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
    $('.tracker').text(`${player} has won!`)
    store.game.over = true
  } else {
    // test function named 'hasValue' that determines currentValue is either 'o' or 'x'
    const hasValue = (currentValue) => currentValue === 'o' || currentValue === 'x'
    // console log if the .every method is true or false after each move
    console.log(cellVal.every(hasValue))
    // if all values are either 'o' or 'x',
    if (cellVal.every(hasValue) === true) {
      // show result message
      $('.tracker').text('It is a tie!')
      store.game.over = true
      // tieCount++
    }
  }
}

const updateBoardFailure = function (response) {
  $('#message').text('Move not recorded!').show()
  $('#message').removeClass().addClass('failure')
}

const getGamesSuccess = function (response) {
  console.log(response)

  $('#message').text('Get Game History success!').show()
  $('#message').removeClass().addClass('success')

  store.games = response.games
  let gamesHtml = ''

  store.games.forEach(game => {
    const oneGame = (`
      <p>Game Result:${game.cells}</p>
      <p>ID: ${game._id}</p>
      <p>Date Created: ${game.createdAt}</p>
      <p>Updated On: ${game.updatedAt}</p>
      <br>
    `)
    gamesHtml = gamesHtml + oneGame
  })

  $('.gamelist').html(gamesHtml)
}

const getGamesFailure = function (response) {
  $('#message').text('Get Game History failed!').show()
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
  updateBoardFailure,
  getGamesSuccess,
  getGamesFailure
}
