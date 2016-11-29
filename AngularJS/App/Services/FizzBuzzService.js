'use strict';

app.factory('FizzBuzzService', function Result(startNumber, endNumber, fizz, buzz) {
    return {
        Result: function (startNumber, endNumber, fizz, buzz) {
            var fizzr = [];
            var buzzr = [];
            var fizzbuzz = [];
            var excluded = [];

            for (var i = startNumber; i < endNumber; i++) {
                if (i % fizz == 0 && i % buzz == 0) {
                    fizzbuzz.push(i);
                } else if (i % fizz == 0) {
                    fizzr.push(i);
                }
                else if (i % buzz == 0) {
                    buzzr.push(i);
                }
                else {
                    excluded.push(i);
                }
            }

            var result = {
                FizzResult: fizz,
                BuzzResult: buzz,
                FizzBuzzResult: fizzbuzz,
                Excluded: excluded
            };

            return result;
        }
    }
});