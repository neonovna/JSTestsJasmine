exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'jasmine2',

  capabilities: {
    'browserName': 'chrome', //'firefox' or 'safari'
    'chromeOptions': {
      'args': ['no-sandbox']
    }
  },
}
