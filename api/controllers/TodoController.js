/**
 * TodoController.js
 *
 * @description :: The todo controller is where all our CRUD actions will take place.
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */
(function () {
  'use strict';
  module.exports = {
    todos: function (req, res) {
      Todo.find({}).sort({
        'createdAt': -1
      }).exec(function (err, todos) {
        //            for (var i = 0; i < todos.length; i++) {
        //              console.log(todos[i]);
        //            }
        if (err) {
          return res.json(500, err);
        }
        return res.json(todos);
      });
    },
    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to TodoController)
     */
    _config: {}
  };
}());