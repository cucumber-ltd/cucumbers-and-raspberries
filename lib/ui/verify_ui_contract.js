'use strict'

const assert = require('assert')
const sinon = require('sinon')

module.exports = ({ factory, changeStation, timeout }) =>
  describe("a UI", () => {
    let ui

    beforeEach(async () => {
      ui = factory()
    })

    it("changes station", async () => {
      const spy = sinon.spy()
      ui.onChangeStation(spy)
      await changeStation({ ui })
      assert(spy.called)
    }).timeout(timeout)

    afterEach(async () => {
      await ui.stop()
    })
  })
