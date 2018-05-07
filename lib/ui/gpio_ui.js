'use strict'

const Gpio = require('onoff').Gpio
const button = new Gpio(4, 'in', 'falling', { debounceTimeout: 10 })

module.exports = class GpioUi {
  constructor({ debug }) {
    this._debug = debug
  }

  onChangeStation(handler) {
    button.watch(() => {
      if (this._debug)
        console.log("click!")
      handler()
    })
  }

  stop() {
    button.unexport()
  }
}
