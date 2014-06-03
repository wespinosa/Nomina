app.controller('mainCtrl',function($scope,$http,$modal,$log,$filter,ngTableParams){
    $scope.guardar=function(id){
        var nombre=$('#nombre').val();
        var descripcion=$('#descripcion').val();
        guardarDiccionario(id,nombre,descripcion);
    };
    $scope.ver='Willian';
});
