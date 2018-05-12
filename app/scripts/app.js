'use strict';
/**
 * @ngdoc overview
 * @name accountApp
 * @description
 * # accountApp
 *
 * Main module of the application.
 */
angular
  .module('accountApp', [
    'ngRoute',
    'ui.router',
    'oc.lazyLoad',
    'ui.bootstrap',
    'pascalprecht.translate'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$translateProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $translateProvider) {

    $ocLazyLoadProvider.config({
      debug: false,
      events: true,
    });

    $translateProvider.useStaticFilesLoader({
      prefix: 'i18n/',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage(localStorage.translationLanguage || 'english');

    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboardCtrl',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
          loadMyDirectives: function ($ocLazyLoad) {
            return $ocLazyLoad.load(
              {
                name: 'accountApp',
                files: [
                  'scripts/directives/header/header.js',
                  'scripts/directives/header/header-notification/header-notification.js',
                  'scripts/directives/sidebar/sidebar.js',
                  'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                ]
              })
          }
        }
      })
      .state('dashboard.home', {
        url: '/home',
        templateUrl: 'views/dashboard/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'homeCtrl',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'accountApp',
              files: [
                'scripts/directives/notifications/notifications.js'
              ]
            })
          }
        }
      })
      .state('login', {
        templateUrl: 'views/pages/login.html',
        url: '/login',
        controller: 'LoginCtrl',
        controllerAs: 'loginCtrl'
      })
  }]);


