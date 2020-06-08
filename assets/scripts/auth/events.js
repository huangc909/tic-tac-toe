'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const getFormFields = require('./../../../lib/get-form-fields')

let xFirst = true

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

  xFirst = true
}

// const onIndexTile = function (event) {
//   const tileSelected = store.game.cells
//   for (let i = 0; i < tileSelected.length; i++) {
//     if (xFirst === true) {
//       if (tileSelected[i] !== 'x' || tileSelected[i] !== 'o') {
//         const form = event.target
//         const data = getFormFields(form)
//
//         console.log(event)
//         console.log(data)
//
//         api.indexTile(data)
//           .then(ui.indexTileSuccess)
//           .catch(ui.indexTileFailure)
//
//         xFirst = false
//       } else {
//         $('#message').text('This tile has already been selected. Pick another!').show()
//         $('#message').removeClass().addClass('failure')
//       }
//     } else {
//       if (tileSelected[i] !== 'x' || tileSelected[i] !== 'o') {
//         const form = event.target
//         const data = getFormFields(form)
//
//         console.log(event)
//         console.log(data)
//
//         api.indexTile(data)
//           .then(ui.indexTileSuccess)
//           .catch(ui.indexTileFailure)
//
//         xFirst = true
//       } else {
//         $('#message').text('This tile has already been selected. Pick another!').show()
//         $('#message').removeClass().addClass('failure')
//       }
//     }
//   }
// }

const onIndexTile = function (event) {
  // Put store game cells object into tileSelected variable.
  const tileSelected = store.game.cells
  // Have the loop function go through each game cell
  for (let i = 0; i < tileSelected.length; i++) {
    // If xFirst player is true
    if (xFirst === true) {
      // and if the tile with index i does not have an x or o in its game cell,
      if (tileSelected[i] !== 'x' || tileSelected[i] !== 'o') {
        // put the event target into the tile variable.
        const tile = event.target

        console.log(event)
        // Put the tile through the api function indexZeroX.
        api.indexZeroX(tile)
          // If successful, .then, failed, .catch
          .then(ui.indexTileXSuccess)
          .catch(ui.indexTileXFailure)
        // change the xFirst player to false
        xFirst = false
      } else {
        // If the game cell is taken, post message.
        $('#message').text('This tile has already been selected. Pick another!').show()
        $('#message').removeClass().addClass('failure')
      }
      // If the xFirst player is false
    } else {
      // and if the tile with index 0 does not have an x or o in its game cell,
      if (tileSelected[i] !== 'x' || tileSelected[i] !== 'o') {
        // put the event target into the tile variable.
        const tile = event.target

        console.log(event)
        // Put the tile through the api function indexZeroO.
        api.indexZeroO(tile)
          // If successful, .then, failed, .catch
          .then(ui.indexZeroOSuccess)
          .catch(ui.indexZeroOFailure)
        // change the xFirst player to true
        xFirst = true
      } else {
        // If the game cell is taken, post message.
        $('#message').text('This tile has already been selected. Pick another!').show()
        $('#message').removeClass().addClass('failure')
      }
    }
  }
}

const onIndexZero = function (event) {
  // Put store game cells object into tileSelected variable.
  const tileSelected = store.game.cells
  // If xFirst player is true
  if (xFirst === true) {
    // and if the tile with index 0 does not have an x or o in its game cell,
    if (tileSelected[0] !== 'x' || tileSelected[0] !== 'o') {
      // put the event into the selected variable,
      const selected = event.target
      // and put the selected tile into the tile variable.
      const tile = 0
      // The value of the player is 'x'.
      const player = 'x'

      console.log(tile)
      // Put the tile index through the api function indexZero.
      api.indexZero(selected, tile, player)
        // If successful, .then, failed, .catch
        .then(ui.indexZeroSuccess)
        .catch(ui.indexZeroFailure)
      // change the xFirst player to false
      xFirst = false
    } else {
      // If the game cell is taken, post message.
      $('#message').text('This tile has already been selected. Pick another!').show()
      $('#message').removeClass().addClass('failure')
    }
    // If the xFirst player is false
  } else {
    // and if the tile with index 0 does not have an x or o in its game cell,
    if (tileSelected[0] !== 'x' || tileSelected[0] !== 'o') {
      // put the event target into the tile variable.
      const selected = event.target

      const tile = 0

      const player = 'o'

      // Put the tile through the api function indexZero.
      api.indexZero(selected, tile, player)
        // If successful, .then, failed, .catch
        .then(ui.indexZeroSuccess)
        .catch(ui.indexZeroFailure)
      // change the xFirst player to true
      xFirst = true
    } else {
      // If the game cell is taken, post message.
      $('#message').text('This tile has already been selected. Pick another!').show()
      $('#message').removeClass().addClass('failure')
    }
  }
}

const onIndexOne = function (event) {
  const tileSelected = store.game.cells
  if (xFirst === true) {
    if (tileSelected[1] !== 'x' || tileSelected[1] !== 'o') {
      const tile = event.target

      console.log(event)

      api.indexOneX(tile)
        .then(ui.indexOneXSuccess)
        .catch(ui.indexOneXFailure)

      xFirst = false
    } else {
      $('#message').text('This tile has already been selected. Pick another!').show()
      $('#message').removeClass().addClass('failure')
    }
  } else {
    if (tileSelected[1] !== 'x' || tileSelected[1] !== 'o') {
      const tile = event.target

      console.log(event)

      api.indexOneO(tile)
        .then(ui.indexOneOSuccess)
        .catch(ui.indexOneOFailure)

      xFirst = true
    } else {
      $('#message').text('This tile has already been selected. Pick another!').show()
      $('#message').removeClass().addClass('failure')
    }
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

    xFirst = false
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
