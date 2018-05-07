'use strict'

module.exports = class FakePlayer {
  get currentStationUrl() {
    return this._currentStationUrl
  }

  async play(url) {
    this._currentStationUrl = url
  }

  async stop() {
    this._currentStationUrl = null
  }
}

