'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('./../../../lib/get-form-fields')

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
}

const onTopLeft = function (event) {
  console.log('Top Left Selected!')
}

const onTopCenter = function (event) {
  console.log('Top Center Selected!')
}

const onTopRight = function (event) {
  console.log('Top Right Selected!')
}

const onMiddleLeft = function (event) {
  console.log('Middle Left Selected!')
}

const onMiddleCenter = function (event) {
  console.log('Middle Center Selected!')
}

const onMiddleRight = function (event) {
  console.log('Middle Right Selected!')
}

const onBottomLeft = function (event) {
  console.log('Bottom Left Selected!')
}

const onBottomCenter = function (event) {
  console.log('Bottom Center Selected!')
}

const onBottomRight = function (event) {
  console.log('Bottom Right Selected!')
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePasswords: onChangePasswords,
  onSignOut: onSignOut,
  onNewGame: onNewGame,
  onTopLeft: onTopLeft,
  onTopCenter: onTopCenter,
  onTopRight: onTopRight,
  onMiddleLeft: onMiddleLeft,
  onMiddleCenter: onMiddleCenter,
  onMiddleRight: onMiddleRight,
  onBottomLeft: onBottomLeft,
  onBottomCenter: onBottomCenter,
  onBottomRight: onBottomRight
}
