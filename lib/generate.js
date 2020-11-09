
const genco = require('genco');

const path = require('path');

function generate(model, templatesFolder) {
    if (Array.isArray(model)) {
        let result = '';
        
        model.forEach(function (item) {
            result += generate(item, templatesFolder);
        });
        
        return result;
    }
    
    const templateFilename = path.join(templatesFolder, model.type + '.tpl');
    
    return genco.file(model, templateFilename);
}

module.exports = generate;

