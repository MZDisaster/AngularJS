'use strict';

app.filter('Timer', ['$filter', function ($filter) {
    return function (n, len, fractionSize) {
        var num = n;
        len = parseInt(len, 10);
        if (isNaN(num) || isNaN(len)) {
            return n;
        }
        num = '' + $filter('number')(n, fractionSize), 10;
        while (num.length < (len + fractionSize + 1)) {
            num = '0' + num;
        }

        num = num.replace('.', ':');

        return num;
    };
}]);