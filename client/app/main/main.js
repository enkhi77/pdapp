'use strict';

angular.module('pdappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('default', {
        url: '/',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('main', {
        abstract: true,
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        authenticate: true
      })
      .state('main.quote', {
        url: '/quote',
        templateUrl: 'app/main/quote.html'
      })
      .state('main.archive', {
        url: '/archive',
        templateUrl: 'app/main/archive.html'
      })
      .state('main.order', {
        url: '/order',
        templateUrl: 'app/main/order.html'
      })
  });
