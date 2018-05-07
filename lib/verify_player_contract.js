'use strict'

const stations = require('../fixtures/station_urls')

module.exports =  ({ factory, assertCurrentlyPlaying, timeout }) => 
  describe("a player", () => {
    let player

    beforeEach(async () => {
      player = factory()
    })

    it("plays a station URL", async () => {
      const stationName = "BBC Radio 4"
      await player.play(stations[stationName])
      await assertCurrentlyPlaying(stationName, player)
    }).timeout(timeout)

    afterEach(async () => {
      player.stop()
    })
  })
