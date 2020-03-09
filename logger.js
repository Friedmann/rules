const EventEmmiter = require('events');

var url = 'http://bla.io/log';

class Logger extends EventEmmiter {
    log( message ){
        // Send an HTTP request
        console.log(message);
        
        // this.emit('logging', {data: 'bla'});
    }
}

module.exports = Logger;