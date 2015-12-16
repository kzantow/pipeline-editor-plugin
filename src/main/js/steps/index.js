/**
 * Editor modules for the built in steps.
 * This just wraps up the editor modules in this directory
 *
 * The installEditors function is called by the main adjunct, but it doesn't really matter
 * where it is called from, as long as they are installed before they are needed.
 */

var editorModules = {
  "sh" : require('./shell'),
  "git" : require('./git'),
  "stash" : require('./stash'),
  "sleep" : require("./sleep"),
  "rick" : require('./rick')  
};

module.exports = editorModules;

// TODO: Get this info from Jenkins. See CJP-3974
