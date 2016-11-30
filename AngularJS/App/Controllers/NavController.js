'use strict';

app.controller('NavController',
    function ($scope, $route, NavigationService, NavButtonClassService) {

        $scope.next = function () {
            NavigationService.next($route.current.params.id || 0);
        }
        $scope.back = function () {
            NavigationService.back($route.current.params.id || 0);
        }
        $scope.first = function () {
            NavigationService.first();
        }

        $scope.$on('$routeChangeSuccess', function () {
            NavButtonClassService.update();
            $scope.BackButtonClass = NavButtonClassService.back;
            $scope.NextButtonClass = NavButtonClassService.next;
        });
        
    });