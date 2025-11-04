module.exports = {
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'reports',
    overwrite: false,
    html: true,
    json: true
  },
  require: ['ts-node/register'],
  spec: 'api-tests/api-*.test.ts',
  // ← ADD THIS LINE
  'ts-node': {
    transpileOnly: true  // Skip type checking → fixes 'expect' redeclare
  }
};