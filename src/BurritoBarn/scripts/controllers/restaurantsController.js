(function () {
    'use strict';

    angular
        .module('burritoBarn')
        .controller('restaurantsController', restaurantsController);

    restaurantsController.$inject = ['$scope', 'Restaurants']; 

    function restaurantsController($scope, Restaurants) {
        $scope.restaurants = Restaurants.query();
    }
})();
