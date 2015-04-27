'use strict';

/**
 * @ngdoc function
 * @name clientportalWebappApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientportalWebappApp
 */
angular.module('clientportalWebappApp')
  .controller('LoginCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.loginData = {};
  });
