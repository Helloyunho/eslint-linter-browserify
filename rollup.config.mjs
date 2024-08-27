import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import terser from '@rollup/plugin-terser'
import replace from '@rollup/plugin-replace'

function generateRollup (input, output) {
  const plugins = [
    replace({
      preventAssignment: true,
      values: {
        'require("node:': 'require("',
        "require('node:": "require('",
        'from "node:': 'from "',
        "from 'node:": "from '"
      }
    }),
    commonjs({
      ignoreGlobal: true,
      requireReturnsDefault: 'preferred'
    }),
    json(),
    nodePolyfills(),
    nodeResolve({
      preferBuiltins: false
    })
  ]

  if (output.file.match(/\.min\./)) {
    plugins.push(terser())
  }

  return {
    context: 'window',
    input: input,
    output: {
      intro: 'if (!global) { var global = globalThis || window; }',
      ...output
    },
    plugins
  }
}

export default [
  generateRollup('index.js', {
    file: 'linter.js',
    format: 'umd',
    exports: 'named',
    name: 'eslint'
  }),
  generateRollup('index.js', {
    file: 'linter.min.js',
    format: 'umd',
    exports: 'named',
    name: 'eslint'
  }),
  generateRollup('index.js', {
    file: 'linter.mjs',
    format: 'esm'
  }),
  generateRollup('index.js', {
    file: 'linter.cjs',
    format: 'cjs',
    exports: 'named'
  }),
  generateRollup('uayor.mjs', {
    file: 'use-at-your-own-risk.js',
    format: 'umd',
    exports: 'named',
    name: 'eslint'
  }),
  generateRollup('uayor.mjs', {
    file: 'use-at-your-own-risk.min.js',
    format: 'umd',
    exports: 'named',
    name: 'eslint'
  }),
  generateRollup('uayor.mjs', {
    file: 'use-at-your-own-risk.mjs',
    format: 'esm'
  }),
  generateRollup('uayor.mjs', {
    file: 'use-at-your-own-risk.cjs',
    format: 'cjs',
    exports: 'named'
  })
]
