'use strict';

// Register `courseList` component, along with its associated controller and template
angular.
  module('courseList').
  component('courseList', {
    templateUrl: 'course-list/course-list.template.html',
    controller: ['course',
      function courseListController(course) {
        this.courses = course.query();
        this.orderProp = 'age';
      }
    ]
  });
