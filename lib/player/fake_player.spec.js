'use strict'

const FakePlayer = require('./fake_player')
const verifyPlayerContract = require('./verify_player_contract')
const { assertCurrentlyPlaying } = require('./fake_player_assertions')

const factory = () => new FakePlayer()


describe("an fake player", () => {
  verifyPlayerContract({ factory, assertCurrentlyPlaying, timeout: 2000 })
})
