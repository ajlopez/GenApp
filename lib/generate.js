
const genco = require('genco');

const path = require('path');

function generate(model, templatesFolder) {
    const templateFilename = path.join(templatesFolder, model.type + '.tpl');
    
    return genco.file(model, templateFilename);
}

module.exports = generate;

