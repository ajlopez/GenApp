
const generate = require('../lib/generate');

const path = require('path');

const templatesFolder = path.join(__dirname, 'templates');

exports['generate text'] = function (test) {
    const model = {
        text: 'Hello, world'
    };
    
    const result = generate(model, templatesFolder).trim();
    
    test.ok(result);
    test.equal(result, '<p>\r\nHello, world\r\n</p>');
};

