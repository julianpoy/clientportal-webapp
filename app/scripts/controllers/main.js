'use strict';

/**
 * @ngdoc function
 * @name clientportalWebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientportalWebappApp
 */
angular.module('clientportalWebappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.settingsMain = settingsMain;
  });
