const StyleDictionary = require('style-dictionary');

// Custom format for CSS variables
StyleDictionary.registerFormat({
  name: 'css/variables',
  formatter: function(dictionary, config) {
    return `/**
 * Generated Design Tokens
 * Do not edit directly
 */
:root {
${dictionary.allProperties.map(prop => `  --${prop.name}: ${prop.value};`).join('\n')}
}`;
  }
});

// Custom transform for token names
StyleDictionary.registerTransform({
  name: 'name/kebab',
  type: 'name',
  transformer: function(token, options) {
    const path = token.path.join('-');
    return path;
  }
});

module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      transforms: ['attribute/cti', 'name/kebab', 'time/seconds', 'content/icon', 'color/css', 'size/rem'],
      buildPath: 'src/styles/',
      files: [{
        destination: 'tokens.css',
        format: 'css/variables'
      }]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'src/styles/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/es6'
      }]
    },
    json: {
      transformGroup: 'js',
      buildPath: 'src/styles/',
      files: [{
        destination: 'tokens.json',
        format: 'json/flat'
      }]
    }
  }
};
