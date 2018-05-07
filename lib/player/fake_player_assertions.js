'use strict'

const assert = require('assert')
const stations = require('../../fixtures/station_urls')

module.exports = {
  assertCurrentlyPlaying: ({ expectedStationName, player }) => {
    assert.equal(player.currentStationUrl, stations[expectedStationName])
  }
}
