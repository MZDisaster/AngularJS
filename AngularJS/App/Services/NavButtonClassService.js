
app.factory('NavButtonClassService', ['$route', function ($route) {
    var BackButtonClassSet = function (id) {
        if (isNaN(id) || id == 0)
            return 'disabled';
        else if (!isNaN(id))
            return 'active';
    }

    var NextButtonClassSet = function (id) {
        if (id > 8)
            return 'disabled';
        else
            return 'active';
    }

    var id = (parseFloat($route.current.params.id, 10));

    var backbuttonState = BackButtonClassSet(id);
    var nextbuttonState = NextButtonClassSet(id);

    return{
        back: '',
        next: '',
        update: function () {
            var id = (parseFloat($route.current.params.id, 10));
            this.back = BackButtonClassSet(id);
            this.next = NextButtonClassSet(id);
        }
    }
}]);