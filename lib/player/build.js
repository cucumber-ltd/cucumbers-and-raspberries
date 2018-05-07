'use strict'

module.exports = ({ type, debug }) => {
  const Player = require(`./${type}`)
  const player = new Player({ debug })
  const { assertCurrentlyPlaying } = require(`./${type}_assertions`)
  return { player, assertCurrentlyPlaying }
}
