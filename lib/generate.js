
const genco = require('genco');

const path = require('path');

let templatesFolder = 'templates';

function generate(model, tplFolder) {
    if (tplFolder)
        templatesFolder = tplFolder;
    
    if (Array.isArray(model)) {
        let result = '';
        
        model.forEach(function (item) {
            result += generate(item);
        });
        
        return result;
    }
    
    if (model.items)
        return generateType(model.type + '-prologue', model) +
            generate(model.items) +
            generateType(model.type + '-epilogue', model);
    
    return generateType(model.type, model);
}

function generateType(type, model) {
    const templateFilename = path.join(templatesFolder, type + '.tpl');
    
    return genco.file(model, templateFilename);
}

module.exports = generate;

