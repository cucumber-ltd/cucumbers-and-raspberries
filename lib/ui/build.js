'use strict'

module.exports = ({ type }) => {
  const Ui = require(`./${type}`)
  const ui = new Ui()
  const { changeStation } = require(`./${type}_actions`)
  return { ui, changeStation }
}
