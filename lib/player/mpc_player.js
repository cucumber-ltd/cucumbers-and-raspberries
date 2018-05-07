'use strict'

const { promisify } = require('util')
const exec = promisify(require('child_process').exec)

module.exports = class MpcPlayer {
  constructor({ debug }) {
    this._debug = debug
  }

  async play(url) {
    await this._mpc('clear')
    await this._mpc(`add ${url}`)
    await this._mpc('play 1')
  }

  async stop() {
    await this._mpc('stop')
  }

  async _mpc(cmd) {
    const { stdout, stderr } = await exec(`mpc ${cmd}`)
    if (!this._debug) return
    console.log(`$ mpc ${cmd}`)
    if (stdout)
      console.log(stdout)
    if (stderr)
      console.log(stderr)
  }
}
