'use strict'

const assert = require('assert')
const { Before, After, Given, When, Then } = require('cucumber')
const buildPlayer = require('../../lib/player/build')
const buildUi = require('../../lib/ui/build')

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
    },
    ui: {
      type: env.ui_type || 'fake_ui',
    }
  }
  const dependencies = { ...buildPlayer(config.player), ...buildUi(config.ui) }
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

Given('two stations are configured:', async (dataTable) => {
  const stationNames = dataTable.raw().map(row => row[0])
  const stationUrls = stationNames.map(name => stations[name])
  await this.radio.setStationUrls(stationUrls)
})

When('the radio is turned on', async () => {
  await this.radio.on()
})

When('the station is changed', async () => {
  await this.changeStation(this)
})

Then('the station should be playing', async () => {
  await this.assertCurrentlyPlaying({ expectedStationName: this.theStationName, ...this })
})

Then('BBC Radio 6 Music should be playing', async () => {
  const stationName = "BBC Radio 6 Music"
  await this.assertCurrentlyPlaying({ expectedStationName: stationName, ...this })
})

After(async () => {
  await this.player.stop()
})
