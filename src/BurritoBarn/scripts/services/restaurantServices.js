(function () {
    'use strict';

    angular
        .module('restaurantServices', ['ngResource'])
        .factory('Restaurant', Restaurant);

    Restaurant.$inject = ['$resource'];

    function Restaurant($resource) {
        return $resource('/api/restaurants/:id');
    }

})();