'use strict';

angular.module('pdappApp')
  .controller('MainCtrl', function ($scope, $http, Auth, socket) {
    $scope.prducts = [];

    $scope.currentUser = Auth.getCurrentUser();
    console.log('Current User', $scope.currentUser);

    $http.get('/api/products').success(function(productdata) {
      $scope.products = productdata;
      socket.syncUpdates('products', $scope.products);
    });

    $scope.isCollapsed = true;

    $scope.status1 = {
      isopen: false
    };
    $scope.status2 = {
      isopen: false
    };

    $scope.addProduct = function() {
      if($scope.newProduct === '') {
        return;
      }
      $http.post('/api/products', { name: $scope.newProduct });
      $scope.newProduct = '';
    };

    $scope.deleteProduct = function(thing) {
      $http.delete('/api/products/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('products');
    });
  });
