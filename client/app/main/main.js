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
      .state('main.createquote', {
        url: '/createquote',
        templateUrl: 'app/main/partials/createquote.html'
      })
      .state('main.quotes', {
        url: '/quotes',
        templateUrl: 'app/main/partials/quotes.html'
      })
      .state('main.order', {
        url: '/order',
        templateUrl: 'app/main/partials/order.html'
      })
  });
