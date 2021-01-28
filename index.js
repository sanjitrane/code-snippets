/**function to mask strings with # till the last 4 characters */
function maskify(cc){
    cc.toString()
    return cc.splice(0,-4).replace(/./g,'#')+cc.splice(-4)
}