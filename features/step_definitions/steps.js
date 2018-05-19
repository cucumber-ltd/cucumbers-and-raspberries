'use strict'

const assert = require('assert')
const { setDefaultTimeout, Before, After, Given, When, Then } = require('cucumber')
const buildRadio = require('../../lib/build')

const stations = require('../../fixtures/station_urls')

const config = {
  player: {
    type: process.env.player_type || 'fake_player',
    debug: false
  },
  ui: {
    type: process.env.ui_type || 'fake_ui',
    debug: true
  }
}

setDefaultTimeout(10 * 1000)

Before(async function () {
  Object.assign(this, buildRadio(config))
})

Given('a station is configured', function () {
  this.theStationName = "BBC Radio 4"
  this.radio.setStationUrls([stations[this.theStationName]])
})

Given('two stations are configured:', async function (dataTable) {
  const stationNames = dataTable.raw().map(row => row[0])
  const stationUrls = stationNames.map(name => stations[name])
  this.radio.setStationUrls(stationUrls)
})

Given('the radio has been turned on', async function () {
  this.radio.on()
  await this.assertCurrentlyPlaying({ expectedStationName: this.theStationName, ...this })
})

When('the radio is turned on', function () {
  this.radio.on()
})

When('the station is changed', function () {
  this.changeStation(this)
})

When('the radio is turned off', function () {
  this.radio.off()
})

Then('the station should be playing', async function () {
  await this.assertCurrentlyPlaying({ expectedStationName: this.theStationName, ...this })
})

Then('BBC Radio 6 Music should be playing', async function () {
  const stationName = "BBC Radio 6 Music"
  await this.assertCurrentlyPlaying({ expectedStationName: stationName, ...this })
})

Then('nothing should be playing', async function () {
  await this.assertCurrentlyPlaying({ expectedStationName: "nothing", ...this })
})

After(async function () {
  this.player.stop()
  this.ui.stop()
})
