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
  'ts-node': {
    transpileOnly: true,        // ← Skip type checking
    compilerOptions: {
      module: 'CommonJS'        // ← Force CommonJS
    }
  }
};