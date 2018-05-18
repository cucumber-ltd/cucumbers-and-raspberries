'use strict'

const exec = require('child_process').execSync

module.exports = class MpcPlayer {
  constructor({ debug }) {
    this._debug = debug
  }

  play(url) {
    this._mpc('clear')
    this._mpc(`add ${url}`)
    this._mpc('play 1')
  }

  stop() {
    this._mpc('stop')
  }

  _mpc(cmd) {
    const { stdout, stderr } = exec(`mpc ${cmd}`)
    if (!this._debug) return
    console.log(`$ mpc ${cmd}`)
    if (stdout)
      console.log(stdout)
    if (stderr)
      console.log(stderr)
  }
}
