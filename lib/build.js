'use strict'

const buildPlayer = require('./player/build')
const buildUi = require('./ui/build')
const Radio = require('./radio')

module.exports = env => {
  const config = {
    player: {
      type: env.player_type || 'fake_player',
      debug: false
    },
    ui: {
      type: env.ui_type || 'fake_ui',
    }
  }
  const dependencies = { ...buildPlayer(config.player), ...buildUi(config.ui) }
  const radio = new Radio(dependencies)
  return { radio, ...dependencies }
}

