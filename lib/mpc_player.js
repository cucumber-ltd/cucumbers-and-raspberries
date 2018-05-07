'use strict'

const { promisify } = require('util')
const exec = promisify(require('child_process').exec)

module.exports = class MpcPlayer {
  async play(url) {
    await exec('mpc clear')
    await exec(`mpc add ${url}`)
    await exec('mpc play 1')
  }

  async stop() {
    await exec('mpc stop')
  }
}
