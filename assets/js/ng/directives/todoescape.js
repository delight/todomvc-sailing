(function () {
  'use strict';
  angular.module('todomvcApp')
    .directive('todoEscape', function () {
      var ESCAPE_KEY = 27;
      return function (scope, elem, attrs) {
        elem.bind('keydown', function (event) {
          if (event.keyCode === ESCAPE_KEY) {
            scope.$apply(attrs.todoEscape);
          }
        });
      };
    });
}());

/*
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the todoEscape directive');
      }
    };
*/