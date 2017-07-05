var JasmineConsoleReporter = require('jasmine-console-reporter'); //Jasmine console reporter

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'jasmine2',

  suites: {
    get: './tests/get.js'
  },

  capabilities: {
    'browserName': 'chrome', //'firefox' or 'safari'
    'chromeOptions': {
      'args': ['no-sandbox']
    }
  },

  onPrepare: function() {

    //Jasmine console Reporter ==>
    var reporter = new JasmineConsoleReporter({
      colors: 1, // (0|false)|(1|true)|2
      cleanStack: 1, // (0|false)|(1|true)|2|3
      verbosity: 4, // (0|false)|1|2|(3|true)|4
      listStyle: 'indent', // "flat"|"indent"
      activity: false
    });
    jasmine.getEnv().addReporter(reporter);
    // <=== Jasmine console Reporter
  }
}
