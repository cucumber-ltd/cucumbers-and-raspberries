'use strict'

const assert = require('assert')
const FakePlayer = require('./fake_player')
const stations = require('../fixtures/station_urls')
const verifyPlayerContract = require('./verify_player_contract')

const factory = () => new FakePlayer()

const assertCurrentlyPlaying = (expectedStationName, player) => {
  assert.equal(player.currentStationUrl, stations[expectedStationName])
}

describe("an fake player", () => {
  verifyPlayerContract({ factory, assertCurrentlyPlaying, timeout: 2000 })
})
