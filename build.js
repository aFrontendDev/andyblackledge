/* eslint-disable no-console */
require('babel-core/register');
var Metalsmith = require('metalsmith');
var reactTemplate = require('metalsmith-react-templates').default;

new Metalsmith(__dirname)
  .source('./_pages')
  .clean(false)
  .use(reactTemplate({
    babel: true,
    directory: '_layouts',
    baseFileDirectory: '_master-pages',
    baseFile: '_master.html',
    isStatic: true
  }))
  .destination('./dist')
  .build(function(err) {
    if (err) {
      throw err;
    }
  });
