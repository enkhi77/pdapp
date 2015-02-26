'use strict';

angular.module('pdappApp')
  .controller('AdminCtrl', function ($scope, $http, $location, Auth, User) {
    $scope.user = {};
    $scope.errors = {};
    $scope.rolestatus = {
      isopen: false
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
          phone: $scope.user.phone,
          role: $scope.user.role,
          password: $scope.user.password
        })
          .then( function(res) {
            console.log('Create response', res)
            // Account created, redirect to home
            $location.path('/admin/reps');
          })
          .catch( function(err) {
            console.log('Create error', err)
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
