'use strict';

app.controller('UppgiftController', 
    function ($scope, $routeParams, NavigationService) {

        $scope.next = function () {
            NavigationService.next($routeParams.id);
        }
        $scope.back = function () {
            NavigationService.back($routeParams.id);
        }
        $scope.first = function () {
            NavigationService.first();
        }
});