
'use strict';

// Register `logoList` component, along with its associated controller and template
angular.
  module('logoList').
  component('logoList', {
    templateUrl: 'logo-list/logo-list.template.html',
    controller: ['Logo',
      function LogoListController(Logo) {
        this.logos = Logo.query();
        this.orderProp = '-source_items.audience_size';
      }
    ]
  });