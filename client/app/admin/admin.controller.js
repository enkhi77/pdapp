'use strict';

angular.module('pdappApp')
  .controller('AdminCtrl', function ($scope, $http, $state, Auth, User) {
    console.log('invoking admin controller', Auth.isAdmin())
    if(!Auth.isAdmin()){
      $state.go('login')
    }

    $scope.user = {};
    $scope.errors = {};
    $scope.rolestatus = {
      isopen: false
    };

    $http.get('/api/products').success(function(productdata) {
      $scope.products = productdata;
      //socket.syncUpdates('product', $scope.products);
    });

    $scope.addProduct = function() {
      if($scope.newProduct === '') {
        return;
      }
      $http.post('/api/products', {
        company: $scope.newProduct.company,
        category: $scope.newProduct.category,
        partnum: $scope.newProduct.partnum,
        price: $scope.newProduct.price,
        watt: $scope.newProduct.watt,
        estar: $scope.newProduct.estar,
        name: $scope.newProduct.name,
      });
      $scope.newProduct = '';
    };

    $scope.deleteProduct = function(product) {
      $http.delete('/api/products/' + product._id);
    };

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          address: $scope.user.address,
          city: $scope.user.city,
          state: $scope.user.state,
          zip: $scope.user.zip,
          phone: $scope.user.phone,
          role: $scope.user.role,
          password: $scope.user.password
        })
          .then( function(res) {
            console.log('Create response', res);
            // Account created, redirect to home
            $state.reload();
          })
          .catch( function(err) {
            console.log('Create error', err);
            err = err.data;
            $scope.errors = {};

            // Update validity of form fields that match the mongoose errors
            angular.forEach(err.errors, function(error, field) {
              form[field].$setValidity('mongoose', false);
              $scope.errors[field] = error.message;
            });
          });
      }
    };

    // Use the User $resource to fetch all users
    $scope.users = User.query();

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
  });
