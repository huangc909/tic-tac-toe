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

const onIndexZero = function (event) {
  console.log('Top Left Selected!')

  const form = event.target
  const data = getFormFields(form)

  console.log(event)
  console.log(data)

  api.indexZero(data)
    .then(ui.indexZeroSuccess)
    .catch(ui.indexZeroFailure)
}

const onIndexOne = function (event) {
  console.log('Top Center Selected!')

  const form = event.target
  const data = getFormFields(form)

  console.log(event)
  console.log(data)

  api.indexOne(data)
    .then(ui.indexOneSuccess)
    .catch(ui.indexOneFailure)
}

const onIndexTwo = function (event) {
  console.log('Top Right Selected!')
}

const onIndexThree = function (event) {
  console.log('Middle Left Selected!')
}

const onIndexFour = function (event) {
  console.log('Middle Center Selected!')
}

const onIndexFive = function (event) {
  console.log('Middle Right Selected!')
}

const onIndexSix = function (event) {
  console.log('Bottom Left Selected!')
}

const onIndexSeven = function (event) {
  console.log('Bottom Center Selected!')
}

const onIndexEight = function (event) {
  console.log('Bottom Right Selected!')
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePasswords: onChangePasswords,
  onSignOut: onSignOut,
  onNewGame: onNewGame,
  onIndexZero: onIndexZero,
  onIndexOne: onIndexOne,
  onIndexTwo: onIndexTwo,
  onIndexThree: onIndexThree,
  onIndexFour: onIndexFour,
  onIndexFive: onIndexFive,
  onIndexSix: onIndexSix,
  onIndexSeven: onIndexSeven,
  onIndexEight: onIndexEight
}
