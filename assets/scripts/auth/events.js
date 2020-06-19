'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store')

let turn = true

const onGetSignUp = function (event) {
  $('.getsignupbutton').hide()
  $('.getsigninbutton').show()
  $('.signin').hide()
  $('.signup').show()
}

const onGetSignIn = function (event) {
  $('.getsignupbutton').show()
  $('.getsigninbutton').hide()
  $('.signin').show()
  $('.signup').hide()
}

const onGetPlayersInfo = function (event) {
  $('.changepw').show()
  $('.getgames').show()
  $('.gamelist').hide()
  $('.tracker').hide()
  $('.gameboard').hide()
  $('#message').text("Player's Info Success!")
  $('#message').removeClass().addClass('success')
}

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onNewGame = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)

  turn = true

  $('.box').empty()
  $('.tracker').empty()
}

const onSelectedTile = function (event) {
  // parseInt turns the event.target.dataset.id into a number
  const cell = parseInt(event.target.dataset.id)
  // ternary operator to see who is the current player,
  // if turn is true, then it is 'x',
  // if turn is false, then it is 'o'
  const player = turn ? 'x' : 'o'
  // if ($('.tracker').text() === 'x has won!' || $('.tracker').text() === 'o has won!' || $('.tracker').text() === 'There is a tie!') {
  if (store.game.over === true) {
  } else {
  // if the event target's HTML text is empty,
    if ($(event.target).text() === '') {
    // if turn is true,
      if (turn) {
        // add 'x' to the innerHTML
        $(event.target).text('x')
        // change turn true to the inverse (false)
        turn = !turn
        $('.tracker').text("It is o's turn!")
        // if turn is not true,
      } else {
        // add 'o' to the innerHTML
        $(event.target).text('o')
        // change turn false to the inverse (true)
        turn = !turn
        $('.tracker').text("It is x's turn!")
      }
      // pass the cell and player to the api
      api.updateBoard(cell, player)
        // If successful, .then, failed, .catch
        .then((response) => ui.updateBoardSuccess(response, cell, player))
        .catch(ui.updateBoardFailure)
    } else {
      $('.tracker').text('Space already taken! Pick another!')
    }
  }
}

const onGetGames = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.getGames(data)
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

module.exports = {
  onGetSignUp,
  onGetSignIn,
  onGetPlayersInfo,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onSelectedTile,
  onGetGames
}
