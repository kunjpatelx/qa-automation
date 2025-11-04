module.exports = {
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'reports',
    overwrite: false,
    html: true,
    json: true
  },
  require: ['ts-node/register'],
  spec: 'tests/api-*.test.ts'
};