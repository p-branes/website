'use strict';

angular.
  module('p-branes').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/courses', {
          template: '<course-list></course-list>'
        }).
        when('/courses/:courseId', {
          template: '<course-detail></course-detail>'
        }).
        // when('/cert-paths', {
        //   template: '<cert-list></cert-list>'
        // }).
        // when('/cert-paths/:certId', {
        //   template: '<cert-detail></cert-detail>'
        // }).
        otherwise('/courses');


    }
  ]);

