'use strict';

app.controller('FizzBuzzController', ['$scope', 'FizzBuzzService', 'BuzzNumberFilter', 'FizzNumberFilter', 'FizzBuzzNumberFilter', 'ExcludedNumberFilter',
    function ($scope, FizzBuzzService) {
        $scope.StartNumber = 1;
        $scope.EndNumber = 100;
        $scope.FizzNumber = 3;
        $scope.BuzzNumber = 4;

        $scope.FizzBuzzResult = FizzBuzzService($scope.StartNumber, $scope.EndNumber, $scope.FizzNumber, $scope.BuzzNumber);

        $scope.checkNumbers = function () {
            $scope.FizzBuzzResult = FizzBuzzService($scope.StartNumber, $scope.EndNumber, $scope.FizzNumber, $scope.BuzzNumber);
        };        
    }]);