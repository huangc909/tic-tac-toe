'use strict'

const store = require('./../store')

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
  $('#message').text('Sign In success! Click on "New Game" to start playing!').show()
  $('#message').removeClass().addClass('success')
  $('.signup').hide()
  $('.signin').hide()
  $('.getsignoutbutton').show()
  $('.getsignupbutton').hide()
  $('.getsigninbutton').hide()
  $('.getplayersinfobutton').show()
  $('.newgame').show()

  store.user = response.user
}

const signInFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign In failed. Try again or sign up!').show().delay(1200).fadeOut(1500)
  $('#message').removeClass().addClass('failure')
}

const signOutSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Sign Out success!').show().delay(600).fadeOut(1500)
  $('#message').removeClass().addClass('success')
  $('.getplayersinfobutton').hide()
  $('.getsignoutbutton').hide()
  $('.getsigninbutton').hide()
  $('.getsignupbutton').show()
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
  $('#message').text('Password Change success!').show()
  $('#message').removeClass().addClass('success')
}

const changePasswordFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Password Change failed. Try again!')
  $('#message').removeClass().addClass('failure')
}

const newGameSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('New Game success!').show()
  $('#message').removeClass().addClass('success')
  store.game = response.game
  $('.tracker').show().text("It is X's turn!")
  $('.gameboard').show()
  $('.changepw').hide()
  $('.getgames').hide()
}

const newGameFailure = function () {
  $('form').trigger('reset')
  $('#message').text('New Game failed!')
  $('#message').removeClass().addClass('failure')
}

const updateBoardSuccess = function (response, cell, player) {
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
    $('#message').text('GAME OVER')
    store.game.over = true
  } else {
    // test function named 'hasValue' that determines currentValue is either 'o' or 'x'
    const hasValue = (currentValue) => currentValue === 'o' || currentValue === 'x'
    // if all values are either 'o' or 'x',
    if (cellVal.every(hasValue) === true) {
      // show result message
      $('.tracker').text('It is a tie!')
      $('#message').text('GAME OVER')
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
  $('#message').text('Get Game History success!').show()
  $('#message').removeClass().addClass('success')

  store.games = response.games

  let gamesHtml = ''

  store.games.forEach(game => {
    const oneGame = (`
      <p><strong>Game Result:</strong></p>
      <p>${game.cells}</p>
      <p><strong>ID:</strong> ${game._id}</p>
      <p><strong>Date Created:</strong> ${game.createdAt}</p>
      <p><strong>Updated On:</strong> ${game.updatedAt}</p>
      <br>
    `)
    gamesHtml = gamesHtml + oneGame
  })

  $('.gamelist').html(gamesHtml).show()
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
