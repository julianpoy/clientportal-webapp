'use strict';

/**
 * @ngdoc function
 * @name clientportalWebappApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientportalWebappApp
 */
angular.module('clientportalWebappApp')
  .controller('LoginCtrl', function ($scope, Client) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.loginData = {};

    $scope.doLogin = function(){
        //Send login json, and store the response
        $scope.serverResponse = Client.login(loginData, function(){
            //Determine response from server
            if (!$scope.serverResponse.result) {
                alert("Sorry, that isn't the correct username and password.");
            } else {
                //Store the token from the server for future use
                document.cookie = "session_token=" + $scope.serverResponse.result.session_token + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";
                //Redirect to main site
                $location.path("/panel/" + $scope.loginData.id);
            }
        },
        //To catch Errors when trying to join while the server
        //Or backend is down
        catchError);
    }
  });
