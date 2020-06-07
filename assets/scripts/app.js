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
  $('#index-zero').on('click', authEvents.onIndexZero)
  $('#index-one').on('click', authEvents.onIndexOne)
  $('#index-two').on('click', authEvents.onIndexTwo)
  $('#index-three').on('click', authEvents.onIndexThree)
  $('#index-four').on('click', authEvents.onIndexFour)
  $('#index-five').on('click', authEvents.onIndexFive)
  $('#index-six').on('click', authEvents.onIndexSix)
  $('#index-seven').on('click', authEvents.onIndexSeven)
  $('#index-eight').on('click', authEvents.onIndexEight)
})
