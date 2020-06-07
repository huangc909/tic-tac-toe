'use strict'

const store = require('./../store')

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
  $('#changepw').show()
  $('#newgame').show()
  console.log(response)
  store.user = response.user
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
  $('.row').show().css('display', 'row')
}

const newGameFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Oh no! New Game failed. Ask the developer to fix the code!')
  $('#message').removeClass().addClass('failure')
}

const indexZeroSuccess = function (response) {
  console.log(response)
  $('#message').text('Move recorded!').show()
  $('#message').removeClass().addClass('success')
  $('.index-zero').text('X')
  store.game = response.game
}

const indexZeroFailure = function (response) {
  console.log(response)
  $('#message').text('Move not recorded!').show()
  $('#message').removeClass().addClass('failure')
}

const indexOneSuccess = function (response) {
  console.log(response)
  $('#message').text('Move recorded!').show()
  $('#message').removeClass().addClass('success')
  $('.index-one').text('X')
  store.game = response.game
}

const indexOneFailure = function (response) {
  console.log(response)
  $('#message').text('Move not recorded!').show()
  $('#message').removeClass().addClass('failure')
}

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure,
  newGameSuccess: newGameSuccess,
  newGameFailure: newGameFailure,
  indexZeroSuccess: indexZeroSuccess,
  indexZeroFailure: indexZeroFailure,
  indexOneSuccess: indexOneSuccess,
  indexOneFailure: indexOneFailure
}
