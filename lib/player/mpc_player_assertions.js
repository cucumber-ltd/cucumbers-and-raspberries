'use strict'

const assert = require('assert')
const { promisify } = require('util')
const read = promisify(require('read'))

module.exports = {
  assertCurrentlyPlaying: async (expectedStationName, player, timeout) => {
    const answer = await read({ 
      prompt: `Wait a few seconds... Can you hear ${expectedStationName}? [Y/n]`,
      timeout: timeout - 1
    })
    assert(!answer.match(/^n/i), `Expected ${expectedStationName} to be playing`)
  }
}

