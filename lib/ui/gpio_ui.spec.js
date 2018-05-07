'use strict'

const GpioUi = require('./gpio_ui')
const { changeStation } = require('./gpio_ui_actions')
const verifyContract = require('./verify_ui_contract')

const factory = () => new GpioUi()

describe("a GPIO UI", () => {
  verifyContract({ factory, changeStation })
})
