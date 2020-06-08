'use strict'

const config = require('./../config')
const store = require('./../store')

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

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: {
      credentials: {
        email: formData.credentials.email,
        password: formData.credentials.password
      }
    }
  })
}

const changePassword = function (formData) {
  console.log(formData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      passwords: {
        old: formData.passwords.old,
        new: formData.passwords.new
      }
    }
  })
}

const signOut = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newGame = function (formData) {
  console.log(formData)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

// const indexTile = function (updateData) {
//   console.log(updateData)
//   const tileSelected = store.game.cells
//   for (let i = 0; i < tileSelected.length; i++) {
//     return $.ajax({
//       method: 'PATCH',
//       url: config.apiUrl + '/games/' + store.game._id,
//       headers: {
//         Authorization: 'Token token=' + store.user.token
//       },
//       data: {
//         game: {
//           cell: {
//             index: tileSelected[i],
//             value: 'x'
//           },
//           over: false
//         }
//       }
//     })
//   }
// }
const indexTileX = function (updateData) {
  console.log(updateData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 0,
          value: 'x'
        },
        over: false
      }
    }
  })
}

const indexZero = function (selected, tile, player) {
  console.log(tile)
  console.log(player)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: tile,
          value: player
        },
        over: false
      }
    }
  })
}

// const indexZeroO = function (updateData) {
//   console.log(updateData)
//   return $.ajax({
//     method: 'PATCH',
//     url: config.apiUrl + '/games/' + store.game._id,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {
//       game: {
//         cell: {
//           index: 0,
//           value: 'o'
//         },
//         over: false
//       }
//     }
//   })
// }

const indexOneX = function (updateData) {
  console.log(updateData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 1,
          value: 'x'
        },
        over: false
      }
    }
  })
}

const indexOneO = function (updateData) {
  console.log(updateData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 1,
          value: 'o'
        },
        over: false
      }
    }
  })
}

const indexTwo = function (updateData) {
  console.log(updateData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 2,
          value: 'o'
        },
        over: false
      }
    }
  })
}

const indexThree = function (updateData) {
  console.log(updateData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 3,
          value: 'x'
        },
        over: false
      }
    }
  })
}

const indexFour = function (updateData) {
  console.log(updateData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 4,
          value: 'o'
        },
        over: false
      }
    }
  })
}

const indexFive = function (updateData) {
  console.log(updateData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 5,
          value: 'x'
        },
        over: false
      }
    }
  })
}

const indexSix = function (updateData) {
  console.log(updateData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 6,
          value: 'o'
        },
        over: false
      }
    }
  })
}

const indexSeven = function (updateData) {
  console.log(updateData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 7,
          value: 'x'
        },
        over: false
      }
    }
  })
}

const indexEight = function (updateData) {
  console.log(updateData)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 8,
          value: 'o'
        },
        over: false
      }
    }
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  changePassword: changePassword,
  signOut: signOut,
  newGame: newGame,
  indexZero: indexZero,
  // indexZeroO: indexZeroO,
  indexOneX: indexOneX,
  indexOneO: indexOneO,
  indexTwo: indexTwo,
  indexThree: indexThree,
  indexFour: indexFour,
  indexFive: indexFive,
  indexSix: indexSix,
  indexSeven: indexSeven,
  indexEight: indexEight
  // indexTile: indexTile
}
