'use strict';

angular.module('nudgeWebAppApp')
  .factory('Client', ['$resource', function($resource) {

    return $resource( apiBase + 'client/:operation',
        { id: '@id' }, {
            login: {
                method: 'POST',
                params: { operation: 'login' },
                isArray: false
            },
            get: {
                method: 'GET',
                params: { operation: 'get/@id' },
                isArray: false
            }

        } );

}]);
