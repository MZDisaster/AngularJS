'use strict';

app.factory('NavigationService', function ($location) {
    return {
        next: function (id) {
            id = (parseFloat(id, 10));
            if (id < 9)
                $location.path('uppgift/' + (id + 1));
        },
        back: function (id) {
            id = (parseFloat(id, 10));
            if (id > 1)
                $location.path('uppgift/' + (id - 1));
            else
                $location.path('');
        },
        first: function () {
            $location.path('');
        }
    };
});