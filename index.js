'use strict'

const buildRadio = require('./lib/build')
const config = {
  player: {
    type: 'mpc_player',
    debug: false
  },
  ui: {
    type: 'gpio_ui',
    debug: false
  }
}

const { radio } = buildRadio(config)
radio.setStationUrls([
  "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio4fm_mf_p",
  "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_6music_mf_p"
])
radio.on()
console.log('The radio is playing. Press any key to exit')
process.stdin.setRawMode(true)
process.stdin.resume()
process.stdin.on('data', () => {
  radio.off()
  process.exit()
})
