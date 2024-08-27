import * as mjsEslint from './linter.mjs'
import { Linter as mjsLinter } from './linter.mjs'
import { testLinter } from './testLinter.js'
import * as mjsUaoyr from './use-at-your-own-risk.mjs'
import {
  LegacyESLint,
  FlatESLint,
  builtinRules
} from './use-at-your-own-risk.mjs'
import { testUayor } from './testUayor.js'

testLinter('mjsEslint', mjsEslint.Linter)
testLinter('mjsLinter', mjsLinter)

testUayor('mjsUaoyr', mjsUaoyr)
testUayor('mjs', {
  LegacyESLint,
  FlatESLint,
  builtinRules
})
