'use strict';

describe('course', function() {
  var $httpBackend;
  var course;
  var coursesData = [
    {name: 'course X'},
    {name: 'course Y'},
    {name: 'course Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `course` service before each test
  beforeEach(module('core.course'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _course_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('courses/courses.json').respond(coursesData);

    course = _course_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the courses data from `/courses/courses.json`', function() {
    var courses = course.query();

    expect(courses).toEqual([]);

    $httpBackend.flush();
    expect(courses).toEqual(coursesData);
  });

});
