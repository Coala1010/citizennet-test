'use strict';

angular.
  module('core.logo').
  factory('Logo', ['$resource',
    function($resource) {
      return $resource('data/data.json', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);