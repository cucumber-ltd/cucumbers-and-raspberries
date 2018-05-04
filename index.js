const Gpio = require('onoff').Gpio
const button = new Gpio(4, 'in', 'falling', { debounceTimeout: 10 })

button.watch(() => {
  console.log('pressed!')
})
