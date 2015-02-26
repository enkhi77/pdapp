'use strict';

angular.module('pdappApp')
  .directive('pdcustinfo', function () {
    return {
      templateUrl: 'app/pdcustinfo/pdcustinfo.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });