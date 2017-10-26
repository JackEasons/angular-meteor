Package.describe({
  name: 'ardatan:angular-html-compiler',
  version: '0.1.9',
  summary: 'Angular Scss Compiler Package',
  git: 'https://github.com/ardatan/angular-meteor',
  documentation: null
});

Npm.depends({
  'cheerio': '0.22.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.2.2');
  api.use([
    'ecmascript'
  ], 'server');
  api.mainModule('index.js', 'server');
});
