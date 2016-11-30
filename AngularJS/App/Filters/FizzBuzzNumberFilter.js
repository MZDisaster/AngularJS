
app.filter('FizzBuzzNumber', function () {
    return function (FizzBuzzNumber) {
        FizzBuzzNumber = FizzBuzzNumber || '';

        return 'FizzBuzz: ' + FizzBuzzNumber;
    };
})