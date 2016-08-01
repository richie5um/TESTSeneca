var seneca = require('seneca')()

seneca
    .client();

seneca
  .act({ role: 'math', cmd: 'sum', left: 1.1, right: 2.1 }, console.log)
  .act({ role: 'math', cmd: 'sum', integer: true, left: 1.1, right: 2.1 }, console.log)
  .act({ role: 'math', cmd: 'product', left: 3, right: 4 }, console.log);