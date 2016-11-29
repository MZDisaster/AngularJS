
'use strict';

app.controller('Uppgift6Controller', ['$scope', function ($scope) {
    $scope.count = 0;

    $scope.increaseCount = function () {
        $scope.count += 1;
    };

}]);