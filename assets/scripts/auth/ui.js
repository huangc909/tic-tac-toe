'use strict'

// const store = require('./../store')

const signUpSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Wahoo! Sign-up was successful!').show()
  $('#message').removeClass().addClass('success')
}

const signUpFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Oh no! Sign up failed. Try again!')
}

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure
}
