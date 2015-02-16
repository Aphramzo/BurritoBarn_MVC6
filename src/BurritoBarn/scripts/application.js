(function () {
    'use strict';

    config.$inject = ['$routeProvider', '$locationProvider'];

    angular.module('burritoBarn', [
        'ngRoute', 'restaurantServices'
    ]).config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/restaurant/list.html',
                controller: 'restaurantsController'
            })
            .when('/restaurants/add', {
                templateUrl: 'views/restaurant/add.html',
                controller: 'restaurantsAddController'
            })
            .when('/restaurants/edit/:id', {
                templateUrl: 'views/restaurant/edit.html',
                controller: 'restaurantsEditController'
            })
            .when('/restaurants/delete/:id', {
                templateUrl: 'views/restaurant/delete.html',
                controller: 'restaurantsDeleteController'
            });

        $locationProvider.html5Mode(true);
    }
})();