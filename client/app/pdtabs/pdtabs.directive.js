'use strict';

angular.module('pdappApp')
  .directive('pdtabs', function () {
    return {
      templateUrl: 'app/pdtabs/pdtabs.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });