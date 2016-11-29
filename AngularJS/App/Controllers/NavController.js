'use strict';

app.controller('NavController',
    function ($scope, $routeParams, NavigationService) {

        $scope.next = function () {
            NavigationService.next($routeParams.id || 0);
        }
        $scope.back = function () {
            NavigationService.back($routeParams.id || 0);
        }
        $scope.first = function () {
            NavigationService.first();
        }
    });