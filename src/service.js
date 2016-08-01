var seneca = require('seneca')()

seneca
  .use('math-service')
  .listen();
