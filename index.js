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

/**
 * There is a bus moving in the city, and it takes and drop some people in each bus stop.
You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
Take a look on the test cases.
Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
The second value in the first integer array is 0, since the bus is empty in the first bus stop.
 */

const number = (busStop)=>{
    let passengers = 0
    busStop.forEach(item=>{
        passengers+=item[0]-item[1]
    })
    return passengers
}

/**calculations using functions */
function expression(n, operation){
    if(!operation) return n
    return operation(n)
}

function zero(op){ return expression(0, op)}
function one(op){return expression(1, op)}
function two(op){ return expression(2, op)}
function three(op){return expression(3, op)}
function four(op){ return expression(4, op)}
function five(op){return expression(5, op)}
function six(op){ return expression(6, op)}
function seven(op){return expression(7, op)}
function eight(op){ return expression(8, op)}
function nine(op){ return expression(9, op)}

function plus(x){
    return function(y){
        return y + x
    }
}

function minus(x){
    return function(y){
        return y - x
    }
}

function times(x){
    return function(y){
        return y * x
    }
}

function divideBy(x){
    return function(y){
        return Math.floor(y / x)
    }
}

/**Bit Counting */
function countBits(n){
    let binary = n.toString(2)
    return (binary.match(/[1]/g)||[]).length
}

/**Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order 
 * of the strings of a1 which are substrings of strings of a2. */
function inArray(array1, array2){
    return array1
    .filter(a1=>array2.find(a2=>a2.match(a1)))
    .sort()
}

/**Count the smiley faces */
function countSmileys(arr){
    return arr.filter(x => /^[:;][-~]?[(D]$/.test(x)).length;
}

/**Replace With Alphabet Position */
function alphabetPosition(text) {
    const data = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let res = []
    text.toLowerCase().split('').forEach(i=>{
    let index = data.indexOf(i)
    if(index > -1){
      res.push(index+1)
    }
    })
    return res.length ? res.join(' ') :'';
  }

/**Find the Odd Int */
function findOdd(A){
    if(!A.length) return 0
    let resArr = []
    A.forEach(item=>{
        let id = resArr.indexOf(item)
        id > -1 ? resArr.slice(id,1) : resArr.push(item)
    })
    return resArr.length ? resArr[0] : 0
}

/**Words Order */

function order(words){
    if(words==='') return words
    wordsArr = []
    words.forEach(item=>{
        let pos = item.match(/\d+/g)
        if(pos){
            wordsArr[pos+1] = item
        }
    })
    return wordsArr.join(' ')
}

/**Equal sides of an array */

function findEvenIndex(arr){
    let left = 0;
    let right = arr.reduce((a,v)=>{a+v},0)
    for(let i = 0; i<arr.length; i++){
        if(i>0) left+=arr[i-1]
        right -=arr[i]
        if(left=== right){
            return i
        }
    }
    return -1
}

/**Fibonacci memoized */

function fibonacci(n, memo){
    memo = memo || {}
    if(memo[n]) return memo[n]
    if(n < 2) return n
    return memo[n] = fibonacci(n-1,memo) - fibonacci(n-2, memo)
}