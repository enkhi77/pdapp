'use strict';

angular.module('pdappApp')
  .controller('MainCtrl', function ($scope, $http, $state, Auth, socket, $cookieStore) {
    console.log('invoking main controller', $cookieStore.get('token'));
    if(!$cookieStore.get('token')){
      $state.go('login')
    }
    $scope.currentUser = Auth.getCurrentUser();

    $scope.products = [];
    $scope.quotes = [];
    $scope.orders = [];
    $scope.customers = [];

    $http.get('/api/products').success(function(productdata) {
      $scope.products = productdata;
      console.log('Products', $scope.products);
      socket.syncUpdates('products', $scope.products);
    });

    $http.get('/api/quotes').success(function(quotedata) {
      $scope.quotes = quotedata;
      console.log('Quotes', $scope.quotes);
      socket.syncUpdates('quotes', $scope.quotes);
    });

    $http.get('/api/orders').success(function(orderdata) {
      $scope.orders = orderdata;
      console.log('Orders', $scope.orders);
      socket.syncUpdates('orders', $scope.orders);
    });

    $http.get('/api/customers').success(function(customerdata) {
      $scope.customers = customerdata;
      console.log('Customers', $scope.customers);
      socket.syncUpdates('customers', $scope.customers);
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
