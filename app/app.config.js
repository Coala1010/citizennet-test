'use strict';

angular.
  module('myApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/logos', {
          template: '<logo-list></logo-list>'
        }).
        otherwise('/logos');

    }
  ]);