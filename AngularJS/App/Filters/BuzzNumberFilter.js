
app.filter('BuzzNumber', function () {
    return function (BuzzNumber) {
        BuzzNumber = BuzzNumber || '';

        return 'Buzz: ' + BuzzNumber;
    };
})