(function () {
  'use strict';

  angular.module('todomvcApp')
    .directive('todoFocus', function todoFocus($timeout) {
      return function (scope, elem, attrs) {
        scope.$watch(attrs.todoFocus, function (newVal) {
          if (newVal) {
            $timeout(function () {
              elem[0].focus();
            }, 0, false);
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
          element.text('this is the todoFocus directive');
        }
      };
      */