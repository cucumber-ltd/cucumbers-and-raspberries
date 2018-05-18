'use strict'

const Gpio = require('onoff').Gpio

module.exports = class GpioUi {
  constructor({ debug }) {
    this._debug = debug
    this._button = new Gpio(4, 'in', 'falling', { debounceTimeout: 10 })
  }

  onChangeStation(handler) {
    this._button.watch(() => {
      if (this._debug) console.log("click!")

      // TODO: uncomment this line to make it work!
      // handler()
    })
  }

  stop() {
    this._button.unexport()
  }
}
