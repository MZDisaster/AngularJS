
app.filter('ExcludedNumber', function () {
    return function (ExcludedNumber) {
        ExcludedNumber = ExcludedNumber || '';

        return 'Excluded: ' + ExcludedNumber;
    };
})