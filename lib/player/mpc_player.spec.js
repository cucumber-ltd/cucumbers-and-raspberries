'use strict'

const MpcPlayer = require('./mpc_player')
const verifyPlayerContract = require('./verify_player_contract')
const { assertCurrentlyPlaying } = require('./mpc_player_assertions')

const factory = () => new MpcPlayer({ debug: false }) // set to `true` to see console output

const timeout = 9000

describe("an MPC player @slow", () => {
  verifyPlayerContract({ factory, assertCurrentlyPlaying, timeout })
})

