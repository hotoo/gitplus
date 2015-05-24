/* global exports, process */

var fs = require('fs');
var path = require('path');
var yaml = require('js-yaml');
var ini = require('ini');

function getUserHome() {
  return process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
}

var $HOME = exports.$HOME = getUserHome();

var gitplusrc = path.join($HOME, '.gitplusrc');

exports.getGitplusrc = function() {
  var CONFIG = fs.existsSync(gitplusrc) ?
               yaml.safeLoad(fs.readFileSync(gitplusrc)) : {};
  return CONFIG;
}

var gitconfig = path.join($HOME, '.gitconfig');
exports.getGitConfig = function() {
  var GITCONFIG = fs.existsSync(gitconfig) ?
                  ini.parse(fs.readFileSync(gitconfig, 'utf-8')) :
                  { alias: {} };
  return GITCONFIG;
}
