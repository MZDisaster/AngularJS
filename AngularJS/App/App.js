'use strict';

var app = angular.module('app', ["ngRoute", "ngResource"])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "routes/main.html",
                controller: 'MainController'
            })
            .when("/uppgift/:id", {
                templateUrl: function (params) { return 'routes/uppgift-' + params.id + '.html'; },
                controller: 'UppgiftController'
            }).otherwise({
                redirectTo: '/',
            });

        if (window.history && window.history.pushState) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: true
            });
        }
    }])
    .run(function ($rootScope) {
        $rootScope.Item = { Name: 'Item-1', Price: 500, Description: 'The first item!' };
    });

