const tap = require('tap')
const characters = require('.')
const { uniq } = require('lodash')

tap.ok(Array.isArray(characters.hiragana))
tap.ok(Array.isArray(characters.katakana))
tap.ok(characters.hiragana.length === uniq(characters.hiragana).length)
tap.ok(characters.katakana.length === uniq(characters.katakana).length)

tap.equal(characters.presentIn('ブートキャンプ'), true)
tap.equal(characters.presentIn('て'), true)

tap.equal(characters.presentIn(), false)
tap.equal(characters.presentIn(''), false)
tap.equal(characters.presentIn('some English string'), false)
