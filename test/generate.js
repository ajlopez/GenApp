
const generate = require('../lib/generate');

const path = require('path');

const templatesFolder = path.join(__dirname, 'templates');

exports['generate text'] = function (test) {
    const model = {
        type: 'text',
        text: 'Hello, world'
    };
    
    const result = generate(model, templatesFolder).trim();
    
    test.ok(result);
    test.equal(result, '<p>\r\nHello, world\r\n</p>');
};

exports['generate title'] = function (test) {
    const model = {
        type: 'title',
        text: 'Hello, world'
    };
    
    const result = generate(model, templatesFolder).trim();
    
    test.ok(result);
    test.equal(result, '<h1>Hello, world</h1>');
};

exports['generate text and title'] = function (test) {
    const model = [
        {
            type: 'title',
            text: 'Home'
        },
        {
            type: 'text',
            text: 'Hello, world'
        }
    ]
    
    const result = generate(model, templatesFolder).trim();
    
    test.ok(result);
    test.equal(result, '<h1>Home</h1>\r\n<p>\r\nHello, world\r\n</p>');
};

exports['generate application with items'] = function (test) {
    const model = 
    {
        type: 'application',
        name: 'DAppZero',
        items: [
            {
                type: 'title',
                text: 'Home'
            },
            {
                type: 'text',
                text: 'Hello, world'
            }
        ]
    }
    const result = generate(model, templatesFolder).trim();
    
    test.ok(result);

    test.ok(result.indexOf('<html>\r\n' >= 0));
    test.ok(result.indexOf('<head>\r\n' >= 0));
    test.ok(result.indexOf('<title>DAppZero</title>\r\n' >= 0));
    test.ok(result.indexOf('<body>\r\n' >= 0));
    test.ok(result.indexOf('<h1>Home</h1>\r\n<p>\r\nHello, world\r\n</p>' >= 0));
    test.ok(result.indexOf('</body>' >= 0));
};

