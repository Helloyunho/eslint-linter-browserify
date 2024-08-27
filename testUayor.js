function testUayor (name, { LegacyESLint, FlatESLint, builtinRules }) {
  new FlatESLint()
  new LegacyESLint()
  builtinRules.get('no-var')
  console.log(`testUayor ${name} passed`)
}

module.exports = { testUayor }
