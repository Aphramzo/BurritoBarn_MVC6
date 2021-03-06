﻿(function () {
    'use strict';

    angular
        .module('burritoBarn')
        .controller('restaurantsController', restaurantsController)
        .controller('restaurantsAddController', restaurantsAddController)
        .controller('restaurantsEditController', restaurantsEditController)
        .controller('restaurantsDeleteController', restaurantsDeleteController);

    restaurantsController.$inject = ['$scope', 'Restaurant']; 

    function restaurantsController($scope, Restaurant) {
        $scope.restaurants = Restaurant.query();
    }

    restaurantsAddController.$inject = ['$scope', '$location', 'Restaurant', 'Cuisine'];

    function restaurantsAddController($scope, $location, Restaurant, Cuisine) {
        $scope.restaurant = new Restaurant();
        $scope.cuisines = Cuisine.query();
        $scope.add = function () {
            $scope.restaurant.$save(
                function () {
                    $location.path('/');
                },
                function(errors){
                    _showValidationErrors($scope, errors);
                });
        };
    }

    restaurantsEditController.$inject = ['$scope', '$routeParams', '$location', 'Restaurant', 'Cuisine'];

    function restaurantsEditController($scope, $routeParams, $location, Restaurant, Cuisine) {
        $scope.restaurant = Restaurant.get({ id: $routeParams.id });
        $scope.cuisines = Cuisine.query();
        $scope.edit = function () {
            $scope.restaurant.$save(
                function () {
                    $location.path('/');
                },
                function(errors){
                    _showValidationErrors(errors);
                });
        };
    }

    restaurantsDeleteController.$inject = ['$scope', '$routeParams', '$location', 'Restaurant'];

    function restaurantsDeleteController($scope, $routeParams, $location, Restaurant) {
        $scope.restaurant = Restaurant.get({ id: $routeParams.id });
        $scope.remove = function () {
            $scope.restaurant.$remove({id:$scope.restaurant.Id}, function () {
                $location.path('/');
            });
        };
    }

    function _showValidationErrors($scope, errors) {
        //eventually loop through errors from API, but since the we are still on beta 2 dont worry about it
        $scope.validationErrors.push('Unable to save this restaurant. Sorry.');
    }

})();
