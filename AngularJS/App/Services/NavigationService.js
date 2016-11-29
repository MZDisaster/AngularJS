'use strict';

app.factory('NavigationService', function ($location) {
        return {
            next : function (id) {
                $location.path('uppgift/' + (parseFloat(id, 10) + 1));
            },
            back: function (id) {
                if (parseFloat(id, 10) > 1)
                    $location.path('uppgift/' + (parseFloat(id, 10) - 1));
                else
                    $location.path('');
            },
            first : function () {
                $location.path('');
            }
        };
    });