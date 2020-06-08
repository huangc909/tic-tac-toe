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
  $('#signout').show()
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
  $('.container').show()
}

const newGameFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Oh no! New Game failed. Ask the developer to fix the code!')
  $('#message').removeClass().addClass('failure')
}

const indexZeroSuccess = function (response) {
  console.log(response)
  store.game = response.game
  $('#message').text('Move recorded!').show()
  $('#message').removeClass().addClass('success')
  if (store.game.cells[0] === 'x') {
    $('#index-zero').text('X')
  } else if (store.game.cells[0] === 'o') {
    $('#index-zero').text('O')
  }
}

const indexZeroFailure = function (response) {
  $('#message').text('Move not recorded!').show()
  $('#message').removeClass().addClass('failure')
}

// const indexZeroOSuccess = function (response) {
//   console.log(response)
//   store.game = response.game
//   $('#message').text('Move recorded!').show()
//   $('#message').removeClass().addClass('success')
//   $('#index-zero').text('O')
// }
//
// const indexZeroOFailure = function (response) {
//   console.log(response)
//   $('#message').text('Move not recorded!').show()
//   $('#message').removeClass().addClass('failure')
// }

const indexOneXSuccess = function (response) {
  console.log(response)
  store.game = response.game
  $('#message').text('Move recorded!').show()
  $('#message').removeClass().addClass('success')
  $('#index-one').text('X')
}

const indexOneXFailure = function (response) {
  console.log(response)
  $('#message').text('Move not recorded!').show()
  $('#message').removeClass().addClass('failure')
}

const indexOneOSuccess = function (response) {
  console.log(response)
  store.game = response.game
  $('#message').text('Move recorded!').show()
  $('#message').removeClass().addClass('success')
  $('#index-one').text('O')
}

const indexOneOFailure = function (response) {
  console.log(response)
  $('#message').text('Move not recorded!').show()
  $('#message').removeClass().addClass('failure')
}

const indexTwoSuccess = function (response) {
  console.log(response)
  $('#message').text('Move recorded!').show()
  $('#message').removeClass().addClass('success')
  store.game = response.game
  $('#index-two').text('X')
}

const indexTwoFailure = function (response) {
  console.log(response)
  $('#message').text('Move not recorded!').show()
  $('#message').removeClass().addClass('failure')
}

const indexThreeSuccess = function (response) {
  console.log(response)
  $('#message').text('Move recorded!').show()
  $('#message').removeClass().addClass('success')
  store.game = response.game
  $('#index-three').text('X')
}

const indexThreeFailure = function (response) {
  console.log(response)
  $('#message').text('Move not recorded!').show()
  $('#message').removeClass().addClass('failure')
}

const indexFourSuccess = function (response) {
  console.log(response)
  $('#message').text('Move recorded!').show()
  $('#message').removeClass().addClass('success')
  store.game = response.game
  $('#index-four').text('X')
}

const indexFourFailure = function (response) {
  console.log(response)
  $('#message').text('Move not recorded!').show()
  $('#message').removeClass().addClass('failure')
}

const indexFiveSuccess = function (response) {
  console.log(response)
  $('#message').text('Move recorded!').show()
  $('#message').removeClass().addClass('success')
  store.game = response.game
  $('#index-five').text('X')
}

const indexFiveFailure = function (response) {
  console.log(response)
  $('#message').text('Move not recorded!').show()
  $('#message').removeClass().addClass('failure')
}

const indexSixSuccess = function (response) {
  console.log(response)
  $('#message').text('Move recorded!').show()
  $('#message').removeClass().addClass('success')
  store.game = response.game
  $('#index-six').text('X')
}

const indexSixFailure = function (response) {
  console.log(response)
  $('#message').text('Move not recorded!').show()
  $('#message').removeClass().addClass('failure')
}

const indexSevenSuccess = function (response) {
  console.log(response)
  $('#message').text('Move recorded!').show()
  $('#message').removeClass().addClass('success')
  store.game = response.game
  $('#index-seven').text('X')
}

const indexSevenFailure = function (response) {
  console.log(response)
  $('#message').text('Move not recorded!').show()
  $('#message').removeClass().addClass('failure')
}

const indexEightSuccess = function (response) {
  console.log(response)
  $('#message').text('Move recorded!').show()
  $('#message').removeClass().addClass('success')
  store.game = response.game
  $('#index-eight').text('X')
}

const indexEightFailure = function (response) {
  console.log(response)
  $('#message').text('Move not recorded!').show()
  $('#message').removeClass().addClass('failure')
}

// const indexTileSuccess = function (response) {
//   console.log(response)
//   store.game = response.game
//   const tileSelected = store.game.cells
//   for (let i = 0; i < tileSelected.length; i++) {
//     $('#message').text('Move recorded!').show()
//     $('#message').removeClass().addClass('success')
//     console.log(tileSelected[i])
//   }
// }
//
// const indexTileFailure = function (response) {
//   console.log(response)
//   $('#message').text('Move not recorded!').show()
//   $('#message').removeClass().addClass('failure')
// }

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
  // indexZeroOSuccess: indexZeroOSuccess,
  // indexZeroOFailure: indexZeroOFailure,
  indexOneXSuccess: indexOneXSuccess,
  indexOneXFailure: indexOneXFailure,
  indexOneOSuccess: indexOneOSuccess,
  indexOneOFailure: indexOneOFailure,
  indexTwoSuccess: indexTwoSuccess,
  indexTwoFailure: indexTwoFailure,
  indexThreeSuccess: indexThreeSuccess,
  indexThreeFailure: indexThreeFailure,
  indexFourSuccess: indexFourSuccess,
  indexFourFailure: indexFourFailure,
  indexFiveSuccess: indexFiveSuccess,
  indexFiveFailure: indexFiveFailure,
  indexSixSuccess: indexSixSuccess,
  indexSixFailure: indexSixFailure,
  indexSevenSuccess: indexSevenSuccess,
  indexSevenFailure: indexSevenFailure,
  indexEightSuccess: indexEightSuccess,
  indexEightFailure: indexEightFailure
  // indexTileSuccess: indexTileSuccess,
  // indexTileFailure: indexTileFailure
}
