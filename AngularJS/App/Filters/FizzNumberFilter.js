
app.filter('FizzNumber', function () {
    return function (FizzNumber) {
        FizzNumber = FizzNumber || '';

        return 'Fizz: ' + FizzNumber;
    };
})