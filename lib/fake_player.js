'use strict'

module.exports = class FakePlayer {
  get currentStationUrl() {
    return this._currentStationUrl
  }

  play(url) {
    this._currentStationUrl = url
  }
}

