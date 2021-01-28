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