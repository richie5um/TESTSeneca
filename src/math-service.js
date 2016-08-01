module.exports =  function math(options) {
    this.add({ role: 'math', cmd: 'sum' }, (msg, reply) => {
        reply(null, { answer: (msg.left + msg.right) })
    });

    // Call another action (with modified params)
    this.add({ role: 'math', cmd: 'sum', integer: true }, (msg, reply) => {
        console.log('Integer');
        this.act({
            role: 'math', cmd: 'sum', left: Math.floor(msg.left), right: Math.floor(msg.right)
        }, reply);
    });

    this.add({ role: 'math', cmd: 'product' }, (msg, reply) => {
        reply(null, { answer: (msg.left * msg.right) })
    });

    // Wrap all matching patterns to ensure the values are numbers
    this.wrap('role:math', function (msg, respond) {
        msg.left = Number(msg.left).valueOf()
        msg.right = Number(msg.right).valueOf()
        this.prior(msg, respond)
    });
}
