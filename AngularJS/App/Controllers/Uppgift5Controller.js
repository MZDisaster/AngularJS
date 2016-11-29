'use strict';

app.controller('Uppgift5Controller', ['$scope', '$interval', 'numberFixedLenFilter', function ($scope, $interval) {
    $scope.timeLeft = 10;

    $scope.len = 2;
    $scope.fraclen = 3;

    var interval = $interval(function () { },1,1);
    $scope.startTimer = function () {
        console.log('called');
        interval = $interval(function () {
            $scope.timeLeft -= 0.01;
            console.log($scope.timeLeft.length);
            if ($scope.timeLeft <= 0) {
                $interval.cancel(interval);
                $scope.timeLeft = 0;
            }
        }, 10);
    };
    
    $scope.stopTimer = function () {
        $interval.cancel(interval);
    };
    


}]);