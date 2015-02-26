'use strict';

angular.module('pdappApp')
  .controller('MainCtrl', function ($scope, $http, $state, Auth, socket) {
    console.log('invoking main controller', Auth.isLoggedIn());
    if(!Auth.isLoggedIn()){
      $state.go('login')
    }
    $scope.currentUser = Auth.getCurrentUser();
    console.log('Current User', $scope.currentUser);

    $scope.products = [];

    $http.get('/api/products').success(function(productdata) {
      $scope.products = productdata;
      console.log('Products', $scope.products);
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
