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

/**square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. */

function squareDigits(n){
    return parseInt(n.toString().split('').reduce((a,v)=>a+v*v,''))
}

/**onvert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
 * Ignore capitalization when determining if a character is a duplicate. */

 funtion duplicateEncode(word){
     word = word.toLowerCase()
     let charMap = {}
     let res = ''
     word.split('').forEach(function(i){
         charMap[i] = charMap[i] ? charMap[i]+1 : 1
     })
     word.split('').forEach(function(i){
        res+=charMap[i]===1 ? '(':')'
     })
     return res
 }