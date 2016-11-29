'use strict';

app.filter('numberFixedLen', ['$filter', function ($filter) {
    return function (n, len, fractionSize) {
        var num = parseInt($filter('number')(num, fractionSize), 10);
        len = parseInt(len, 10);
        if (isNaN(num) || isNaN(len)) {
            return n;
        }
        num = ''+num;
        while (num.length < len) {
            num = '0'+num;
        }
        return num;
    };
}]);