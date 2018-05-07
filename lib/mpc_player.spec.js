'use strict'

const assert = require('assert')
const { promisify } = require('util')
const read = promisify(require('read'))
const MpcPlayer = require('./mpc_player')
const verifyPlayerContract = require('./verify_player_contract')

const factory = () => new MpcPlayer({ debug: false }) // set to `true` to see console output

const timeout = 9000

const assertCurrentlyPlaying = async (expectedStationName) => {
  const answer = await read({ 
    prompt: `Wait a few seconds... Can you hear ${expectedStationName}? [Y/n]`,
    timeout: timeout - 1
  })
  assert(!answer.match(/^n/i), `Expected ${expectedStationName} to be playing`)
}

describe("an MPC player", () => {
  verifyPlayerContract({ factory, assertCurrentlyPlaying, timeout })
})

