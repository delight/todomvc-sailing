(function () {
  'use strict';
  angular.module('todomvcApp')
    .controller('TodoCtrl', ['$scope', '$sailsRef', '$filter',
      function ($scope, $sailsRef, $filter) {

        function getTodoArray() {
          return ($filter('collectionToArray')($scope.todos));
        }

        $scope.newTodo = '';
        $scope.editedTodo = null;
        $scope.todos = $sailsRef('/todo');

        // watch the todos array for changes and update the counts
/*
          $scope.$watch('todos', function () {
          var todos = getTodoArray();
          $scope.remainingCount = $filter('filter', todos, {
            completed: false
          }).length;
          $scope.completedCount = todos.length - $scope.remainingCount;
          $scope.allChecked = !$scope.remainingCount;
        }, true);
*/
 /*

      // watch the todos array for changes and update the counts
      $scope.$watch('todos', function () {
        $scope.remainingCount = filterFilter($scope.todos, {
          completed: false
        }).length;
        $scope.completedCount = $scope.todos.length - $scope.remainingCount;
        $scope.allChecked = !$scope.remainingCount;
      }, true);
      
    });
*/
        $scope.editTodo = function (todo) {
          $scope.editedTodo = todo;
          // Clone the original todo to restore it on demand.
          $scope.originalTodo = angular.extend({}, todo);
        };

        $scope.doneEditing = function (todo) {
          $scope.editedTodo = null;

          if (!todo.title) {
            $scope.removeTodo(todo);
          } else {
            todo.$update();
          }
        };

        $scope.revertEditing = function (todo) {
          console.log(todo);
          todo = $scope.originalTodo;
          $scope.doneEditing($scope.originalTodo);
        };

        $scope.addTodo = function () {
          if ($scope.newTodo) {
            $scope.todos.$add({
              title: $scope.newTodo,
              completed: false
            });
            $scope.newTodo = '';
          }
        };

        $scope.removeTodo = function (todo) {
          todo.$remove();
        };

        $scope.updateTodo = function (todo) {
          todo.$update();
        };

        $scope.clearCompletedTodos = function (todo) {
          angular.forEach($scope.todos, function (todo, key) {
            if (!isNaN(key) && todo.completed) {
              todo.$remove();
            }
          });
        };

        $scope.markAll = function (allCompleted) {
          angular.forEach($scope.todos, function (todo, key) {
            if (!isNaN(key)) {
              todo.completed = !allCompleted;
              todo.$update();
            }
          });
        };

      }]);
}());