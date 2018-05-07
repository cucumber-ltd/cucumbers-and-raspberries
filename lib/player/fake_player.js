'use strict'

module.exports = class FakePlayer {
  get currentStationUrl() {
    return this._currentStationUrl
  }

  async play(url) {
    return new Promise(resolve => {
      this._currentStationUrl = url
      resolve()
    })
  }

  stop() {
    return new Promise(resolve => {
      this._currentStationUrl = null
      resolve()
    })
  }
}

