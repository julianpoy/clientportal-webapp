'use strict';

/**
 * @ngdoc overview
 * @name clientportalWebappApp
 * @description
 * # clientportalWebappApp
 *
 * Main module of the application.
 */
angular
  .module('clientportalWebappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/client/:id', {
        templateUrl: 'views/client.html',
        controller: 'ClientCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
