'use strict'

const buildPlayer = require('./player/build')
const buildUi = require('./ui/build')
const Radio = require('./radio')

module.exports = config => {
  const dependencies = { ...buildPlayer(config.player), ...buildUi(config.ui) }
  const radio = new Radio(dependencies)
  return { radio, ...dependencies }
}

