'use strict'

const GpioUi = require('./gpio_ui')
const { changeStation } = require('./gpio_ui_actions')
const verifyContract = require('./verify_ui_contract')

const factory = () => new GpioUi({ debug: true })

describe("a GPIO UI @slow", () => {
  verifyContract({ factory, changeStation })

})
