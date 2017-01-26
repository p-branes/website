'use strict';

angular.
  module('core.course').
  factory('course', ['$resource',
    function($resource) {
      return $resource('courses/:courseId.json', {}, {
        query: {
          method: 'GET',
          params: {courseId: 'courses'}, //all the courses if no Id specified
          isArray: true
        }
      });
    }
  ]);
