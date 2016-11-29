'use strict';

app.filter('ReverseText', function () {
    return function (ReverseText) {
        ReverseText = ReverseText || '';
        var result = '';

        for (var i = 0; i < ReverseText.length; i++) {
            result = ReverseText.charAt(i) + result;
        }

        return result;
    };
});