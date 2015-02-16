(function () {
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

    restaurantsAddController.$inject = ['$scope', '$location', 'Restaurant'];

    function restaurantsAddController($scope, $location, Restaurant) {
        $scope.restaurant = new Restaurant();
        $scope.add = function () {
            $scope.restaurant.$save(function () {
                $location.path('/');
            });
        };
    }

    restaurantsEditController.$inject = ['$scope', '$routeParams', '$location', 'Restaurant'];

    function restaurantsEditController($scope, $routeParams, $location, Restaurant) {
        $scope.restaurant = Restaurant.get({ id: $routeParams.id });
        $scope.edit = function () {
            $scope.restaurant.$save(function () {
                $location.path('/');
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

})();
