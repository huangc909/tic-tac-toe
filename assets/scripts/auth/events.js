'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const getFormFields = require('./../../../lib/get-form-fields')

let turn = true

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  console.log(event)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  console.log(event)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePasswords = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  console.log(event)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  console.log(event)
  console.log(data)

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNewGame = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  console.log(event)
  console.log(data)

  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)

  turn = true

  $('.box').empty()
  $('#result').empty()
}

// const onSelectedTile = function (event) {
//   console.log('hi')
// }

const onSelectedTile = function (event) {
  console.log(event)
  // parseInt turns the event.target.dataset.id into a number
  const cell = parseInt(event.target.dataset.id)
  // ternary operator to see who is the current player,
  // if turn is true, then it is 'x',
  // if turn is false, then it is 'o'
  const player = turn ? 'x' : 'o'
  if ($('#result').text() === 'x has won!' || $('#result').text() === 'o has won!' || $('#result').text() === 'There is a tie!') {
  } else {
  // if the event target's HTML text is empty,
    if ($(event.target).text() === '') {
    // and if turn is true,
      if (turn) {
        // add 'x' to the innerHTML
        $(event.target).text('x')
        // change turn true to the inverse (false)
        turn = !turn
        $('#tracker').text("It is O's turn!")
        // if turn is not true,
      } else {
        // add 'o' to the innerHTML
        $(event.target).text('o')
        // change turn false to the inverse (true)
        turn = !turn
        $('#tracker').text("It is X's turn!")
      }
      // pass the cell and player to the api
      api.updateBoard(cell, player)
        // If successful, .then, failed, .catch
        .then((response) => ui.updateBoardSuccess(response, cell, player))
        .catch(ui.updateBoardFailure)
    } else {
      $('#tracker').text('Space already taken! Pick another!')
    }
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePasswords,
  onSignOut,
  onNewGame,
  onSelectedTile
}
