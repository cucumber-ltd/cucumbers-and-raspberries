'use strict'

const buildRadio = require('./lib/build')

const { radio } = buildRadio(process.env)
radio.setStationUrls([
  "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio4fm_mf_p",
  "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_6music_mf_p"
])
radio.on()
console.log('The radio is playing. Press any key to exit')
process.stdin.setRawMode(true)
process.stdin.resume()
process.stdin.on('data', process.exit.bind(process, 0))
