'use strict';

/**
 * @ngdoc function
 * @name clientportalWebappApp.controller:PanelCtrl
 * @description
 * # PanelCtrl
 * Controller of the clientportalWebappApp
 */
angular.module('clientportalWebappApp')
  .controller('PanelCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //Fetch the session token for use
    $scope.session_token = getCookie("session_token");
    //Check if user is logged in. No: Goto login. Yes: Get user data
    if(!$scope.session_token){
        $location.path("/login");
    } else {
        Client.get($scope.session_token);
    }

  });
