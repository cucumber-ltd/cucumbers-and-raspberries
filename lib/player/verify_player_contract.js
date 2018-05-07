'use strict'

const stations = require('../../fixtures/station_urls')

module.exports =  ({ factory, assertCurrentlyPlaying, timeout }) => 
  describe("a player", () => {
    let player

    beforeEach(async () => {
      player = factory()
    })

    it("plays a station URL", async () => {
      const expectedStationName = "BBC Radio 4"
      await player.play(stations[expectedStationName])
      await assertCurrentlyPlaying({ expectedStationName, player, timeout })
    }).timeout(timeout)

    afterEach(async () => {
      player.stop()
    })
  })
