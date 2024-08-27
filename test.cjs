const { Linter: cjsLinter } = require('./linter.cjs')
const { Linter: minLinter } = require('./linter.min.js')
const { Linter: jsLinter } = require('./linter.js')
const { testLinter } = require('./testLinter.js')
const {
  LegacyESLint: cjsLegacy,
  FlatESLint: cjsFlat,
  builtinRules: cjsRules
} = require('./use-at-your-own-risk.cjs')
const {
  LegacyESLint: minLegacy,
  FlatESLint: minFlat,
  builtinRules: minRules
} = require('./use-at-your-own-risk.min.js')
const {
  LegacyESLint: jsLegacy,
  FlatESLint: jsFlat,
  builtinRules: jsRules
} = require('./use-at-your-own-risk.js')
const { testUayor } = require('./testUayor.js')

testLinter('cjsLinter', cjsLinter)
testLinter('minLinter', minLinter)
testLinter('jsLinter', jsLinter)

testUayor('cjs', {
  LegacyESLint: cjsLegacy,
  FlatESLint: cjsFlat,
  builtinRules: cjsRules
})
testUayor('min', {
  LegacyESLint: minLegacy,
  FlatESLint: minFlat,
  builtinRules: minRules
})
testUayor('js', {
  LegacyESLint: jsLegacy,
  FlatESLint: jsFlat,
  builtinRules: jsRules
})
