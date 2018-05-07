'use strict'

const Gpio = require('onoff').Gpio
const button = new Gpio(4, 'in', 'falling', { debounceTimeout: 10 })

module.exports = class GpioUi {
  onChangeStation(handler) {
    button.watch(handler)
  }

  stop() {
    button.unexport()
  }
}
