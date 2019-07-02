// // const countArrayValues = require('count-array-values')
// const japaneseCharacters = require('.')
// const counts = {}
// let i = 0

// console.time('ran in')
// const lineReader = require('readline').createInterface({
//   input: require('fs').createReadStream('jawiki-20181001-corpus.xml')
// })

// lineReader.on('line', function (line) {
//   i++
//   line.split('').forEach(character => {
//     if (japaneseCharacters.presentIn(character)) {
//       counts[character] = counts[character] ? counts[character] + 1 : 1
//     }
//   })
// })

// lineReader.on('close', function () {
//   console.log(JSON.stringify(counts, null, 2))
//   console.timeEnd('ran in')
//   process.exit()
// })
