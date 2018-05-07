'use strict'

const FakeUi = require('./fake_ui')
const { changeStation } = require('./fake_ui_actions')
const verifyContract = require('./verify_ui_contract')

const factory = () => new FakeUi()

describe("a fake UI", () => {
  verifyContract({ factory, changeStation })
})
