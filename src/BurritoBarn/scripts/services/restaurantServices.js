(function () {
    'use strict';

    var restaurantServices = angular.module('restaurantServices', ['ngResource']);

    restaurantServices.factory('Restaurants', ['$resource',
        function ($resource) {
            return $resource('/api/restaurants', {}, {
                query: {
                    method: 'GET', params: {}, isArray: true
                }
            });
        }]);
})();