'use strict';

app.controller('Uppgift5Controller', ['$scope', '$interval', 'TimerFilter', function ($scope, $interval) {
    $scope.timeLeft = 10;

    $scope.len = 2;
    $scope.fraclen = 3;

    var interval = $interval(function () { },1,1);
    $scope.startTimer = function () {
        if($scope.timeLeft == 0)
            $scope.timeLeft = 10;
        $interval.cancel(interval);
        interval = $interval(function () {
            $scope.timeLeft -= 0.01;
            if ($scope.timeLeft <= 0) {
                $interval.cancel(interval);
                $scope.timeLeft = 0;
            }
        }, 10);
    };
    
    $scope.stopTimer = function () {
        $interval.cancel(interval);
    };
    
    $scope.resetTimer = function () {
        $scope.timeLeft = 10;
    };

}]);