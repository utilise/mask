var to = require('to')

module.exports = function mask() {
  var keys = to.arr(arguments)
  return function(o){
    var masked = {}
    keys.forEach(function(k){ masked[k] = o[k] })
    return masked
  }
}
