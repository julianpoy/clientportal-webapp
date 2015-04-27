'use strict';

var apiBase = 'http://backend.portal.kondeo.com/';

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
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
