'use strict';

describe('courseList', function() {

  // Load the module that contains the `courseList` component before each test
  beforeEach(module('courseList'));

  // Test the controller
  describe('courseListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('courses/courses.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('courseList');
    }));

    it('should create a `courses` property with 2 courses fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.courses).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.courses).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
