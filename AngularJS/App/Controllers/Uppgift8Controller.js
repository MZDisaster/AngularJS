'use strict';

app.controller('Uppgift8Controller', ['$scope', function ($scope) {
    $scope.Items = [
        { Name: 'Item-1', Price: 100, Description: 'The First item!' },
        { Name: 'Item-2', Price: 200, Description: 'The Second item!' },
        { Name: 'Item-3', Price: 300, Description: 'The Third item!' },
        { Name: 'Item-4', Price: 400, Description: 'The Forth item!' },
        { Name: 'Item-5', Price: 500, Description: 'The Fifth item!' },
        { Name: 'Item-6', Price: 600, Description: 'The Sixth item!' },
        { Name: 'Item-7', Price: 700, Description: 'The Seventh item!' },
        { Name: 'Item-8', Price: 800, Description: 'The Eighth item!' }
    ];
}]);