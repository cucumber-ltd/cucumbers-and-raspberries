'use strict'

const assert = require('assert')
const { promisify } = require('util')
const MpcPlayer = require('./mpc_player')
const stations = require('../fixtures/station_urls')
const read = promisify(require('read'))

const factory = () => new MpcPlayer()

const timeout = 9000

const assertCurrentlyPlaying = async (expectedStationName) => {
  const answer = await read({ prompt: `Wait a few seconds... Can you hear ${expectedStationName}? [Y/n]`, timeout: timeout -1 })
  assert(!answer.match(/^n/i), `Expected ${expectedStationName} to be playing`)
}

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
