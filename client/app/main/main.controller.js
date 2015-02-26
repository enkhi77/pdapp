'use strict';

angular.module('pdappApp')
  .controller('MainCtrl', function ($scope, $http, Auth, socket) {
    $scope.awesomeThings = [];

    $scope.currentUser = Auth.getCurrentUser();
    console.log('Current User', $scope.currentUser);

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.isCollapsed = true;

    $scope.status1 = {
      isopen: false
    };
    $scope.status2 = {
      isopen: false
    };

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
