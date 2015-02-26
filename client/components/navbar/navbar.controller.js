'use strict';

angular.module('pdappApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Create Quote',
      'link': '/main/createquote'
    },{
      'title': 'Quotes',
      'link': '/main/quotes'
    },{
      'title': 'Order',
      'link': '/main/order'
    }];

    $scope.isCollapsed = true;
    $scope.toggled = function(open) {
      console.log('Dropdown is now: ', open);
    };
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
