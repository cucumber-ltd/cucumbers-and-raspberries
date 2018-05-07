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

  async on() {
    const stationUrl = this._stationUrls[0]
    await this._player.play(stationUrl)
  }

  async off() {
    await this._player.stop()
  }
}

