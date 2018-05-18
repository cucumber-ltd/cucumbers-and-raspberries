'use strict'

const assert = require('assert')
const stations = require('../../fixtures/station_urls')

module.exports =  ({ factory, assertCurrentlyPlaying, timeout }) => 
  describe("a player", () => {
    let player

    beforeEach(() => {
      player = factory()
    })

    it("plays a station URL", async () => {
      const expectedStationName = "BBC Radio 4"
      player.play(stations[expectedStationName])
      await assertCurrentlyPlaying({ expectedStationName, player, timeout })
    }).timeout(timeout)

    it("refuses to play an invalid URL", async () => {
      assert.throws(
        () => player.play(null), 
        "Unable to play station at URL: 'null'"
      )
    })

    afterEach(async () => {
      player.stop()
    })
  })
