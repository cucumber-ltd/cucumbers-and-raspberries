'use strict'

const assert = require('assert')
const sinon = require('sinon')

module.exports = ({ factory, changeStation, timeout }) =>
  describe("a UI", () => {
    let ui

    beforeEach(() => {
      ui = factory()
    })

    it("changes station", async () => {
      const spy = sinon.spy()
      ui.onChangeStation(spy)
      await changeStation({ ui })
      assert(spy.called, "The onChangeStation callback was not called")
    }).timeout(timeout)

    afterEach(async () => {
      await ui.stop()
    })
  })
