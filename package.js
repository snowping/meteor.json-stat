var JSONstatVersion = '0.8.3';

Package.describe({
  name: 'snowping:json-stat',
  version: JSONstatVersion + '_1',
  summary: 'Wrapper for npm module json-stat',
  git: 'https://github.com/snowping/meteor.json-stat.git',
  documentation: 'README.md'
});

//NPM module dependencies
Npm.depends({
   'jsonstat': JSONstatVersion
});

Package.onUse(function(api) {
  api.export('JSONstat', 'server');
  api.addFiles('jsonstat.js', 'server')
});

