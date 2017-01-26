'use strict';

// Define the `phonecatApp` module
angular.module('p-branes', [
  'ngAnimate',
  'ngRoute',
  'core',
  'courseDetail',
  'courseList'
]).directive('header', function () {
    return {
        restrict: 'A',
        replace: true,
        scope: {user: '='}, 
        templateUrl: "header.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
            // Your behaviour goes here :)
        }]
    }
});



 