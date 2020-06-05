'use strict'

const config = require('./../config')
// const store = require('./../store')

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: {
      credentials: {
        email: formData.credentials.email,
        password: formData.credentials.password,
        password_confirmation: formData.credentials.password_confirmation
      }
    }
  })
}

module.exports = {
  signUp: signUp
}
