'use strict';

// This is a JavaScript-based config file containing every Mocha option plus others.
// If you need conditional logic, you might want to use this type of config,
// e.g. set options via environment variables 'process.env'.
// Otherwise, JSON or YAML is recommended.

module.exports = {
  'allow-uncaught': false,
  'async-only': false,
  bail: false,
  'check-leaks': false,
  color: true,
  delay: false,
  diff: true,
  exit: false, // could be expressed as "'no-exit': true"
  extension: ['js', 'cjs', 'mjs'],
  'fail-zero': true,
  'inline-diffs': false,
  // invert: false, // needs to be used with grep or fgrep
  jobs: 1,
  'node-option': ['unhandled-rejections=strict'], // without leading "--", also V8 flags
  package: './package.json',
  parallel: false,
  recursive: false,
  reporter: 'spec',
  retries: 1,
  slow: '75',
  sort: false,
  spec: ['tests/**/*.spec.js'], // the positional arguments!
  timeout: '2000', // same as "timeout: '2s'"
  // timeout: false, // same as "timeout: 0"
  'trace-warnings': true, // node flags ok
  ui: 'bdd',
  'v8-stack-trace-limit': 100, // V8 flags are prepended with "v8-"
  watch: false,
  'watch-files': ['lib/**/*.js', 'tests/**/*.js'],
  'watch-ignore': ['lib/vendor']
};