module.exports = function run(printResult) {
  var unitTestsPath = './units'
  var fs = require('fs')

  fs.readdirSync(unitTestsPath).map(function (fileName) {
    var filePath = unitTestsPath + '/' + fileName;
    return require(filePath)[fileName];
  }).forEach(function (test) {
    // body...
  })
}
