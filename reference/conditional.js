if (1 === 1) { 
    console.log ('true')
} else {
    console.log('not true')
}

// short cut, good for resolving value, but not so readable

let value = (1 === 1 ? 'true' : 'not true')
console.log(value)

// both conditions need to be true 
const result1 =  (1=== 1 && 5 === 4 )
console.log(result1 === 'not true')

// one condition needs to be true

const result2 = (1===1 || 4===5)
console.log(result2 === true ? 'a' : 'b')

