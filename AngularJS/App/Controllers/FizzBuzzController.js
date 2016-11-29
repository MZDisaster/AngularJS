'use strict';

app.controller('FizzBuzzController', ['$scope', 'FizzNumberFilter', 'BuzzNumberFilter', 'FizzBuzzNumberFilter', 'ExcludedNumberFilter',
    function ($scope, FizzBuzzService) {
        $scope.StartNumber = 1;
        $scope.EndNumber = 100;
        $scope.FizzNumber = 3;
        $scope.BuzzNumber = 4;

        $scope.FizzNumbers = [];
        $scope.BuzzNumbers = [];
        $scope.FizzBuzzNumbers = [];
        $scope.ExcludedNumbers = [];

        $scope.FizzBuzzResult = FizzBuzzService.Result($scope.StartNumber, $scope.EndNumber, $scope.FizzNumber, $scope.BuzzNumber);
        

        $scope.checkNumbers = function () {
            $scope.FizzBuzzResult = FizzBuzzService.Result($scope.StartNumber, $scope.EndNumber, $scope.FizzNumber, $scope.BuzzNumber);
            console.log(FizzBuzzService.Result($scope.StartNumber, $scope.EndNumber, $scope.FizzNumber, $scope.BuzzNumber));
        };

        console.log(FizzBuzzService.Result($scope.StartNumber, $scope.EndNumber, $scope.FizzNumber, $scope.BuzzNumber));
        
    }]);