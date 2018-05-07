'use strict'

const assert = require('assert')
const { Before, Given, When, Then } = require('cucumber')

class FakePlayer {
  get currentStationUrl() {
    return this._currentStationUrl
  }

  play(url) {
    this._currentStationUrl = url
  }
}

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
  const player = new FakePlayer()
  const radio = new Radio({ player })
  return { player, radio }
}

const assertCurrentlyPlaying = (expectedStationName, player) => {
  assert.equal(player.currentStationUrl, stations[expectedStationName])
}

const stations = {
  "BBC Radio 4": "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio4fm_mf_p",
  "BBC Radio 6 Music": "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_6music_mf_p"
}

Before(async () => {
  const { player, radio } = buildRadio(process.ENV)
  this.player = player
  this.radio = radio
})

Given('a station is configured', async () => {
  this.theStationName = "BBC Radio 4"
  await this.radio.setStationUrls([stations[this.theStationName]])
})

When('the radio is turned on', async () => {
  await this.radio.on()
})

Then('the station should be playing', async () => {
  assertCurrentlyPlaying(this.theStationName, this.player)
})
