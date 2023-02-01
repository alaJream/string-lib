// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// challenge 1
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// capitalize() - makes the first character of a given string uppercase.


// console.log('Hello World')

const str = 'hello world'
// console.log( str[0] )
// console.log( str.length )
// console.log( str.toUpperCase() )

// console.log( str.slice(3) )

// const first = str[0].toUpperCase()
// const rest = str.slice(1)

// console.log(first + rest)


function capitalize(str) {
  const first = str[0].toUpperCase()
  const rest = str.slice(1)
  return first + rest
}


// console.log( capitalize(str) )
// console.log( capitalize( 'jeremy gonzales' ) )


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// challenge 2
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function allCaps(str) {
  return str.toUpperCase()
}

// console.log(allCaps(str))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// challenge 3
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function capitalizeWords(str) {
  const words = str.split(' ')
  const upperWords = words.map( word => capitalize(word) )
  return upperWords.join(' ')
}

// console.log( capitalizeWords(str) )
// console.log( capitalizeWords('jeremy gonzales') )
// console.log( capitalizeWords('as I was walking charlie') )


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// challenge 4
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

const sample = '   Hello    world!   '

function removeExtraSpaces(str) {
  const trimmed = str.trim()
  const chars = trimmed.split(' ')
  const filtered = chars.filter( (c) => c !== '' )
  return filtered.join(' ')

}
// console.log( removeExtraSpaces(sample) )


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// challenge 5
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// lowercase
// split ''
// filter 
// remove extra spaces
// split, join, return

function kebob(str, separator = '-') {
  const lower = str.toLowerCase()
  const chars = lower.split('')
  const filtered = chars.filter( (c) => {
    const code = c.charCodeAt(0)
    if (code > 96 && code < 123) { 
      return true
    } else if (code > 47 && code < 58) {
      return true
    } else if (code == 32 || code == separator.charCodeAt(0)) {
      return true
    }
    return false
  } )
  const spaceFree = removeExtraSpaces(filtered.join(''))
  return spaceFree.split(' ').join(separator)
}

// const testStr = '    Hello World!!!    1, 3, 5, and 77 a-hyphenated-word     '
// console.log(kebob(testStr))


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// challenge 6
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function snake(str) {
  return kebob(str, '_')
}
// console.log(snake(testStr))


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// challenge 7
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// split on ' '
// loop over the words
//   lowercase first word
//   uppercase other words
// join words on ''
// return
function camelCase(str) {
  const words = str.split(' ')
  const camelWords = words.map((word, i) => {
    if (i == 0) {
      return word.toLowerCase()
    }
    return capitalize(word)
  })

  return camelWords.join('')
}
const testStr = 'Hello world foo bar'
console.log(camelCase(testStr))


module.exports = {
  capitalize,
  allCaps,
  capitalizeWords,
  removeExtraSpaces,
  kebob,
  snake,
  camelCase
};