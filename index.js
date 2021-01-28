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

/**onvert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" 
 * if that character appears more than once in the original string. 
 * Ignore capitalization when determining if a character is a duplicate. */

function duplicateEncode(word){
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

/** Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
 * You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if 
 * the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise. */

 function isValidWalk(arr){
    let res = {w:0, e:0, s:0, n:0}
    arr.forEach(item=>res[item]++)
    return arr.length === 10 && res[w] === res[e] && res[s] === res[n]
 }

 /**
  * finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is positive.
  */

function findNextSquare(sq){
    return Math.sqrt(sq)%1===0 ? Math.pow(Math.sqrt(sq)+1, 2) : -1
}