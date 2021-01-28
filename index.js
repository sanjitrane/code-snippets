/**function to mask strings with # till the last 4 characters */
function maskify(cc){
    cc.toString()
    return cc.splice(0,-4).replace(/./g,'#')+cc.splice(-4)
}

/**function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number. */
function descendingOrder(n){
    return parseInt(n.toString().split('').sort().reverse().join(''))
}

/**function to check if the supplied number is a perfect square */
function square(n){
    return Math.sqrt(parseInt(n))%1===0
}

/**Return the number (count) of vowels in the given string */
function vowelCount(str){
    return (str.match(/[aeiou]/ig)||[]).length
}

/**Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1. */

function binaryArrayToNumber(arr){
    return parseInt(arr.join(''), 2)
}