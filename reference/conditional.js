// if (1 === 1) { 
//     console.log ('true')
// } else {
//     console.log('not true')
// }

// // short cut, good for resolving value, but not so readable

// let value = (1 === 1 ? 'true' : 'not true')
// console.log(value)

// // both conditions need to be true 
// const result1 =  (1=== 1 && 5 === 4 )
// console.log(result1 === 'not true')

// // one condition needs to be true

// const result2 = (1===1 || 4===5)
// console.log(result2 === true ? 'a' : 'b')

// const first = '1'
// const second = '2'

// console.log(`${first} ${second}`)

// const active = false
// let user


// if (active !== true) {
//     user = null
// }

// const month = 'apr'

// switch (month) {
//     case 'dec': case 'jan': case 'feb': console.log('Summer'); break;
//     case 'mar': case 'apr': case 'may': console.log('Autumn'); break;
//     case 'jun': case 'jul': case 'aug': console.log('Winter'); break;
//     case 'sept':  case 'oct': case 'nov': console.log('Spring'); break; 
//     default: throw new Error ('Invalid month')
// }

// if (month === 'mar' || month === 'apr' || month === 'may' ) {
//     console.log ('Autumn')
// } 
// if (month === 'jun' || month === 'jul' || month === 'aug' ) {
//     console.log('winter')
// } 
//  if (month === 'sept' || month === 'oct' || month === 'nov') {
//     console.log('Spring')
// } 
//  if (month === 'dec' || month === 'jan' || month === 'feb') {
//     console.log('Summer')
//  }

// // } else {
// //     throw new Error ('Invalid month')
// // }


// const firstName = 'Schalk'
// const age = 10

// const isValid = firstName && age

// if (isValid) {
//     console.log('Valid to the max!')
// }

/**
 * @typedef {"uppercase" | "lowercase" } format - The format as supplied to the function
 * @typedef {"toUpperCase" | "toLowerCase"} nativeKeys - The matching key as used by JavaScript internally
 * 
 */

/**
 * 
 * @param {string } text 
 * @param {format} [format] 
 * @returns {string}
 */

const changeCase = (text, format) => {
    /**
     * @type {Record<format | 'random', nativeKeys>}
     */
const formatMap = {
    random: Math.random() >= 0.5 ? 'toUpperCase' : 'toLowerCase',
    uppercase: 'toupperCase',
    lowercase: 'toLowerCase',
}

const method = formatMap[format || 'random']
return text[method]()

  }
  
console.log(changeCase('Lara'))
console.log(changeCase('Hello'))