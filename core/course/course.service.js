'use strict';

angular.
  module('core.course').
  factory('course', ['$resource',
    function($resource) {
      return $resource('courses/:courseId.json', {}, {
        query: {
          method: 'GET',
          params: {courseId: 'courses'},
          isArray: true
        }
      });
    }
  ]);
