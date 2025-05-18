module.exports = {
  webServer: {
    command: 'npm start',
    port: 5001,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI
  },
  testDir: 'e2e-tests'
}