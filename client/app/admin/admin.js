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
        templateUrl: 'app/admin/partials/products.html'
      })
      .state('admin.labor', {
        url:'/labor',
        templateUrl: 'app/admin/partials/labor.html'
      })
      .state('admin.quotes', {
        url:'/quotes',
        templateUrl: 'app/admin/partials/quotes.html'
      })
      .state('admin.reps', {
        url: '/reps',
        templateUrl: 'app/admin/partials/reps.html'
      })
      .state('admin.rebate', {
        url: '/rebate',
        templateUrl: 'app/admin/partials/rebate.html'
      })
      .state('admin.powerco', {
        url: '/powerco',
        templateUrl: 'app/admin/partials/powerco.html'
      })
      .state('admin.installer', {
        url: '/installer',
        templateUrl: 'app/admin/partials/installer.html'
      })
      .state('admin.orders', {
        url: '/orders',
        templateUrl: 'app/admin/partials/orders.html'
      });
  });
