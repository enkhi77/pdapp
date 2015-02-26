'use strict';

angular.module('pdappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl',
        authenticate: true
      })
      .state('admin.products', {
        url:'/products',
        templateUrl: 'app/admin/products.html'
      })
      .state('admin.labor', {
        url:'/labor',
        templateUrl: 'app/admin/labor.html'
      })
      .state('admin.quotes', {
        url:'/quotes',
        templateUrl: 'app/admin/quotes.html'
      })
      .state('admin.reps', {
        url: '/reps',
        templateUrl: 'app/admin/reps.html'
      })
      .state('admin.rebate', {
        url: '/rebate',
        templateUrl: 'app/admin/rebate.html'
      })
      .state('admin.powerco', {
        url: '/powerco',
        templateUrl: 'app/admin/powerco.html'
      });
  });
