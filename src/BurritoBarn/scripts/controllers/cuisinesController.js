(function () {
    'use strict';

    angular
        .module('burritoBarn')
        .controller('cuisinesController', cuisinesController)
        .controller('cuisinesDeleteController', cuisinesDeleteController);

    cuisinesController.$inject = ['$scope', '$location', 'Cuisine'];

    function cuisinesController($scope, $location, Cuisine) {
        $scope.cuisines = Cuisine.query();
        $scope.cuisine = new Cuisine();
        $scope.add = function () {
            $scope.cuisine.$save(function () {
                $location.path('/cuisines');
            });
        };
    }

    cuisinesDeleteController.$inject = ['$scope', '$routeParams', '$location', 'Cuisine'];

    function cuisinesDeleteController($scope, $routeParams, $location, Cuisine) {
        $scope.cuisines = Cuisine.query();
        $scope.cuisine = Cuisine.get({ id: $routeParams.id });
        $scope.remove = function () {
            $scope.cuisine.$remove({ id: $scope.cuisine.Id }, function () {
                $location.path('/cuisines');
            });
        };
    }

})();
