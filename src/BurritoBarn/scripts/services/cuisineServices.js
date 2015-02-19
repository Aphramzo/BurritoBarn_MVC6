(function () {
    'use strict';

    angular
        .module('cuisineServices', ['ngResource'])
        .factory('Cuisine', Cuisine);

    Cuisine.$inject = ['$resource'];

    function Cuisine($resource) {
        return $resource('/api/cuisines/:id');
    }

})();