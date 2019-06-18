# japanese-characters

Analyze strings to detect if they contain Japanese characters.

Detects [Hiragana](https://en.wikipedia.org/wiki/Hiragana_(Unicode_block)) 
and [Katakana](https://en.wikipedia.org/wiki/Katakana_(Unicode_block)) characters.

## Installation

```sh
npm install japanese-characters
```

## Usage

The module exports an object with three values: 

- `hiragana`, an array of all the [Hiragana characters](https://en.wikipedia.org/wiki/Hiragana_(Unicode_block))
- `katakana`, an array of all the [Katakana characters](https://en.wikipedia.org/wiki/Katakana_(Unicode_block))
- `presentIn(inputString)`, a function that returns a Boolean indicating whether the given `inputString` contains Japanese characters

```js
const japaneseCharacters = require('japanese-characters')

console.log(japaneseCharacters.presentIn('ブートキャンプ')
// true

console.log(japaneseCharacters.presentIn('some English string')
// false
```

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [lodash](https://ghub.io/lodash): Lodash modular utilities.
- [tap](https://ghub.io/tap): A Test-Anything-Protocol library for JavaScript

## License

MIT
