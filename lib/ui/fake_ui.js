'use strict'

module.exports = class FakeUi {
  constructor() {
    this._onChangeStation = () => {}
  }

  onChangeStation(handler) {
    this._onChangeStation = handler
  }

  changeStation() {
    this._onChangeStation()
  }
}
