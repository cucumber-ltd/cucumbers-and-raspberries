'use strict'

module.exports = class Radio {
  constructor({ player, ui }) {
    this._player = player
    this._ui = ui
    this._stationUrls = []
  }

  setStationUrls(stationUrls) {
    this._stationUrls = stationUrls
  }

  on() {
    this._player.play(this._stationUrls[0])
    this._ui.onChangeStation(() => {
      this._player.play(this._stationUrls[1])
    })
  }

  off() {
    this._player.stop()
  }
}

