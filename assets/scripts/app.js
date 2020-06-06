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
  $('#top-left').on('click', authEvents.onTopLeft)
  $('#top-center').on('click', authEvents.onTopCenter)
  $('#top-right').on('click', authEvents.onTopRight)
  $('#middle-left').on('click', authEvents.onMiddleLeft)
  $('#middle-center').on('click', authEvents.onMiddleCenter)
  $('#middle-right').on('click', authEvents.onMiddleRight)
  $('#bottom-left').on('click', authEvents.onBottomLeft)
  $('#bottom-center').on('click', authEvents.onBottomCenter)
  $('#bottom-right').on('click', authEvents.onBottomRight)
})
