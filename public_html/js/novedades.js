'use strict';

angular.module('Novedades')
    .controller('NovedadCtrl', function ($scope) {
//        $scope.people = [];
        $.ajax({
            url: 'modelo/novedadesEmpleados.json',
            async: false,
            dataType: 'json',
            success: function(data) {
                $scope.people = data;
            }
        });
    });

