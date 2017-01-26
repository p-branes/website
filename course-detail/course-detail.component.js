'use strict';

// Register `courseDetail` component, along with its associated controller and template
angular.
  module('courseDetail').
  component('courseDetail', {
    templateUrl: 'course-detail/course-detail.template.html',
    controller: ['$routeParams', 'course',
      function courseDetailController($routeParams, course) {
        var self = this;
        self.course = course.get({courseId: $routeParams.courseId}, function(course) {
          self.setImage(course.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
