'use strict'

module.exports = class FakeUi {
  onChangeStation(handler) {
    this._onChangeStation = handler
  }

  changeStation() {
    this._onChangeStation()
  }
}
