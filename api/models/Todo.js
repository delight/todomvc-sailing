/**
 * Todo.js
 *
 * @description :: The Todo model
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true
    },
    completed: {
      type: 'boolean',
      defaultsTo: false
    }
  }

};