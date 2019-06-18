const hiragana = require('./hiragana.json')
const katakana = require('./katakana.json')
const presentIn = function (input) {
  if (typeof input !== 'string') return false
  return input.split('').some(character => {
    return hiragana.includes(character) || katakana.includes(character)
  })
}

module.exports = { hiragana, katakana, presentIn }
