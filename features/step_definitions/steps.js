'use strict'

const assert = require('assert')
const { Before, After, Given, When, Then } = require('cucumber')
const buildRadio = require('../../lib/build')

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
