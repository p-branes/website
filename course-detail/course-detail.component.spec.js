'use strict';

describe('courseDetail', function() {

  // Load the module that contains the `courseDetail` component before each test
  beforeEach(module('courseDetail'));

  // Test the controller
  describe('courseDetailController', function() {
    var $httpBackend, ctrl;
    var xyzcourseData = {
      name: 'course xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('courses/xyz.json').respond(xyzcourseData);

      $routeParams.courseId = 'xyz';

      ctrl = $componentController('courseDetail');
    }));

    it('should fetch the course details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.course).toEqual({});

      $httpBackend.flush();
      expect(ctrl.course).toEqual(xyzcourseData);
    });

  });

});
