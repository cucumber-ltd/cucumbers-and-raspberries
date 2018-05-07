'use strict'

module.exports =  ({ factory, assertCurrentlyPlaying }) => 
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
