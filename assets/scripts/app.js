'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePasswords)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-game').on('submit', authEvents.onNewGame)
  $('#game-board').on('click', authEvents.onSelectedTile)
  $('#get-games').on('submit', authEvents.onGetGames)
})
