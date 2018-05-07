'use strict'

module.exports = class Radio {
  constructor({ player, ui }) {
    this._player = player
    this._stationUrls = []
    ui.onChangeStation(() => {
      // TODO: buggy. unit test this.
      const stationUrl = this._stationUrls[1]
      this._player.play(stationUrl)
    })
  }

  setStationUrls(stationUrls) {
    this._stationUrls = stationUrls
  }

  on() {
    const stationUrl = this._stationUrls[0]
    this._player.play(stationUrl)
  }
}

