'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')

$(() => {
  $('.getsignupbutton').on('click', authEvents.onGetSignUp)
  $('.getsigninbutton').on('click', authEvents.onGetSignIn)
  $('.getplayersinfobutton').on('click', authEvents.onGetPlayersInfo)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#new-game').on('submit', authEvents.onNewGame)
  $('.game').on('click', authEvents.onSelectedTile)
  $('#get-games').on('submit', authEvents.onGetGames)
})
