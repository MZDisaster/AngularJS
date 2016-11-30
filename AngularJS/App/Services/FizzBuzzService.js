
app.factory('FizzBuzzService', function () {
    return function (startNumber, endNumber, fizz, buzz) {
        var fizzr = [];
        var buzzr = [];
        var fizzbuzz = [];
        var excluded = [];

        var result = {};
        result.FizzResult = fizzr;
        result.BuzzResult = buzzr;
        result.FizzBuzzResult = fizzbuzz;
        result.Excluded = excluded;

        for (var i = startNumber; i < endNumber; i++) {
            if (i % fizz == 0 && i % buzz == 0) {
                result.FizzBuzzResult.push(i);
            } else if (i % fizz == 0) {
                result.FizzResult.push(i);
            }
            else if (i % buzz == 0) {
                result.BuzzResult.push(i);
            }
            else {
                result.Excluded.push(i);
            }
        }

        return result;
    };
});
