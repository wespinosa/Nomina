var app =angular.module('mainApp',[]);
app.controller('mainCtrl',function($scope,$http){
    $scope.guardar=function(id){
        var nombre=$('#nombre').val();
        var descripcion=$('#descripcion').val();
        guardarDiccionario(id,nombre,descripcion);
    };
    $scope.nombre='Willian Espinosa';
    $scope.imgUser='../img/avatars/wie.jpg';
});
