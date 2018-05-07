'use strict'

const { promisify } = require('util')
const read = promisify(require('read'))

module.exports = {
  changeStation: async ({ timeout }) => {
    await read({ 
      prompt: "Please change station manually. Press [ENTER] when done.",
      timeout: timeout - 1
    })
  }
}
