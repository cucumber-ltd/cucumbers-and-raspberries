'use strict'

const assert = require('assert')
const FakePlayer = require('./fake_player')
const stations = require('../fixtures/station_urls')

const factory = () => new FakePlayer()

const assertCurrentlyPlaying = (expectedStationName, player) => {
  assert.equal(player.currentStationUrl, stations[expectedStationName])
}

describe("a player", () => {
  it("plays a station URL", () => {
    const player = factory()
    const stationName = "BBC Radio 4"
    player.play(stations[stationName])
    assertCurrentlyPlaying(stationName, player)
  })
})
