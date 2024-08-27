function getLinter () {
  return require('./node_modules/eslint/lib/linter/linter').Linter
}

class RuleTester {
  constructor (options) {
    this.options = options
  }
}

class SourceCode {
  constructor (options) {
    this.options = options
  }
}

process.versions.node = '22.0.0'

module.exports.Linter = getLinter()
module.exports.RuleTester = RuleTester
module.exports.SourceCode = SourceCode
