'use strict'

module.exports = class FakePlayer {
  get currentStationUrl() {
    return this._currentStationUrl
  }

  play(url) {
    if (!url)
      throw new Error(`Unable to play station at URL: '${url}'`)
    this._currentStationUrl = url
  }

  stop() {
    this._currentStationUrl = null
  }
}

