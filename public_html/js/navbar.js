'use strict';

angular.module('rutasMenu')
    .controller('NavbarCtrl', function ($scope) {
       $.ajax({
        url: "modelo/menu.json",
        async: false,
        dataType: 'json',
        success: function(data) {
            $scope.items = data;
            var totalItems=data.length;
//             angular.forEach(data, function(value, key) {
////                 if(value.submenu!=="")
////                     alert(value.submenu.name);
//              });
        }
    });
        $scope.nombre='Willian Espinosa';
        $scope.imgUser='img/avatars/wie.jpg';
        $scope.awesomeThings = ['HTML5 Boilerplate','AngularJS','Karma'];
    })
    
    .controller('NovedadCtrl', function ($scope) {
       
        $scope.prueba = function(name) {
            alert(name);
            $.ajax({
                url: 'modelo/novedadesEmpleados.json',
                async: false,
                dataType: 'json',
                data:{codigo:name},
                success: function(data) {
                    $scope.people = data;
                }
            });
        };
   })
   
    .controller('EmpeladoCtrl', function ($scope) {
        $.ajax({
            url: 'modelo/listaEmpleadoNovedad.json',
            async: false,
            dataType: 'json',
            success: function(data) {
                $scope.people = data;
            }
        });
        
   });
