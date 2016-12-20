/**
 * This is used to set up the environment that's needed for most
 * of the unit tests for the project which includes es6/jsx transpilation
 * with `babel-register`, polyfilling, ignoring css/images imports, and
 * initializing the DOM with jsdom
 */
require('babel-register');
require('babel-polyfill');
require('ignore-styles');
require('browser-env')(['window', 'document', 'navigator']);
