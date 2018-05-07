'use strict'

const assert = require('assert')
const { Before, After, Given, When, Then } = require('cucumber')
const buildPlayer = require('../../lib/player/build')

class Radio {
  constructor({ player }) {
    this._player = player
    this._stationUrls = []
  }

  setStationUrls(stationUrls) {
    this._stationUrls = stationUrls
  }

  on() {
    const stationUrl = this._stationUrls[0]
    this._player.play(stationUrl)
  }
}

const buildRadio = (env) => {
  const config = {
    player: {
      type: env.player_type || 'fake_player',
      debug: false
    }
  }
  const dependencies = { ...buildPlayer(config.player) }
  const radio = new Radio(dependencies)
  return { radio, ...dependencies }
}

const stations = require('../../fixtures/station_urls')

Before(async () => {
  Object.assign(this, buildRadio(process.env))
})

Given('a station is configured', async () => {
  this.theStationName = "BBC Radio 4"
  await this.radio.setStationUrls([stations[this.theStationName]])
})

When('the radio is turned on', async () => {
  await this.radio.on()
})

Then('the station should be playing', async () => {
  await this.assertCurrentlyPlaying(this.theStationName, this.player)
})

After(async () => {
  await this.player.stop()
})
