'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

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

// const onIndexTile = function (event) {
//   const tileSelected = store.game.cells
//   for (let i = 0; i < tileSelected.length; i++) {
//     if (tileSelected[i] !== 'x' || tileSelected[i] !== 'o') {
//       const form = event.target
//       const data = getFormFields(form)
//
//       console.log(event)
//       console.log(data)
//
//       api.indexTile(data)
//         .then(ui.indexTileSuccess)
//         .catch(ui.indexTileFailure)
//     } else {
//       $('#message').text('This tile has already been selected. Pick another!').show()
//       $('#message').removeClass().addClass('failure')
//     }
//     console.log(tileSelected[i])
//   }
// }

const onIndexZero = function (event) {
  const tileSelected = store.game.cells

  if (tileSelected[0] !== 'x' || tileSelected[0] !== 'o') {
    const form = event.target
    const data = getFormFields(form)

    console.log(event)
    console.log(data)

    api.indexZero(data)
      .then(ui.indexZeroSuccess)
      .catch(ui.indexZeroFailure)
  } else {
    $('#message').text('This tile has already been selected. Pick another!').show()
    $('#message').removeClass().addClass('failure')
  }
}

const onIndexOne = function (event) {
  const tileSelected = store.game.cells

  if (tileSelected[1] !== 'x') {
    const form = event.target
    const data = getFormFields(form)

    console.log(event)
    console.log(data)

    api.indexOne(data)
      .then(ui.indexOneSuccess)
      .catch(ui.indexOneFailure)
  } else {
    $('#message').text('This tile has already been selected. Pick another!').show()
    $('#message').removeClass().addClass('failure')
  }
}

const onIndexTwo = function (event) {
  const tileSelected = store.game.cells

  if (tileSelected[2] !== 'x') {
    const form = event.target
    const data = getFormFields(form)

    console.log(event)
    console.log(data)

    api.indexTwo(data)
      .then(ui.indexTwoSuccess)
      .catch(ui.indexTwoFailure)
  } else {
    $('#message').text('This tile has already been selected. Pick another!').show()
    $('#message').removeClass().addClass('failure')
  }
}

const onIndexThree = function (event) {
  const tileSelected = store.game.cells

  if (tileSelected[3] !== 'x') {
    const form = event.target
    const data = getFormFields(form)

    console.log(event)
    console.log(data)

    api.indexThree(data)
      .then(ui.indexThreeSuccess)
      .catch(ui.indexThreeFailure)
  } else {
    $('#message').text('This tile has already been selected. Pick another!').show()
    $('#message').removeClass().addClass('failure')
  }
}

const onIndexFour = function (event) {
  const tileSelected = store.game.cells

  if (tileSelected[4] !== 'x') {
    const form = event.target
    const data = getFormFields(form)

    console.log(event)
    console.log(data)

    api.indexFour(data)
      .then(ui.indexFourSuccess)
      .catch(ui.indexFourFailure)
  } else {
    $('#message').text('This tile has already been selected. Pick another!').show()
    $('#message').removeClass().addClass('failure')
  }
}

const onIndexFive = function (event) {
  const tileSelected = store.game.cells

  if (tileSelected[5] !== 'x') {
    const form = event.target
    const data = getFormFields(form)

    console.log(event)
    console.log(data)

    api.indexFive(data)
      .then(ui.indexFiveSuccess)
      .catch(ui.indexFiveFailure)
  } else {
    $('#message').text('This tile has already been selected. Pick another!').show()
    $('#message').removeClass().addClass('failure')
  }
}

const onIndexSix = function (event) {
  const tileSelected = store.game.cells

  if (tileSelected[6] !== 'x') {
    const form = event.target
    const data = getFormFields(form)

    console.log(event)
    console.log(data)

    api.indexSix(data)
      .then(ui.indexSixSuccess)
      .catch(ui.indexSixFailure)
  } else {
    $('#message').text('This tile has already been selected. Pick another!').show()
    $('#message').removeClass().addClass('failure')
  }
}

const onIndexSeven = function (event) {
  const tileSelected = store.game.cells

  if (tileSelected[7] !== 'x') {
    const form = event.target
    const data = getFormFields(form)

    console.log(event)
    console.log(data)

    api.indexSeven(data)
      .then(ui.indexSevenSuccess)
      .catch(ui.indexSevenFailure)
  } else {
    $('#message').text('This tile has already been selected. Pick another!').show()
    $('#message').removeClass().addClass('failure')
  }
}

const onIndexEight = function (event) {
  const tileSelected = store.game.cells

  if (tileSelected[8] !== 'x') {
    const form = event.target
    const data = getFormFields(form)

    console.log(event)
    console.log(data)

    api.indexEight(data)
      .then(ui.indexEightSuccess)
      .catch(ui.indexEightFailure)
  } else {
    $('#message').text('This tile has already been selected. Pick another!').show()
    $('#message').removeClass().addClass('failure')
  }
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
  // onIndexTile: onIndexTile
}
