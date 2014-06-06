'use strict';

angular
  .module('rutasMenu', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'vista/main.html',
          controller: 'MainCtrl'
        })
        .when('/personal', {
          templateUrl: 'vista/personal.html',
          controller: 'MainCtrl'
        })
        .when('/mail', {
          templateUrl: 'vista/inbox.html',
          controller: 'MainCtrl'
        })
        .when('/periodos', {
              templateUrl: 'vista/periodos.html',
              controller: 'MainCtrl'
            })
        .when('/rubros', {
            templateUrl: 'vista/rubros.html',
            controller: 'MainCtrl'
          })
        .when('/prerol', {
          templateUrl: 'vista/prerol.html',
          controller: 'MainCtrl'
        })
        .when('/tiporol', {
          templateUrl: 'vista/tiporol.html',
          controller: 'MainCtrl'
        })
        .when('/tiporolPeriodo', {
          templateUrl: 'vista/tiporolPeriodo.html',
          controller: 'MainCtrl'
        })
        .when('/planCuentas', {
              templateUrl: 'vista/planCuentas.html',
              controller: 'MainCtrl'
            })
        .when('/novedades', {
            templateUrl: 'vista/novedades.html',
            controller: 'NovedadCtrl'
          })
        .when('/deduccionGasto', {
          templateUrl: 'vista/deduccionGasto.html',
          controller: 'MainCtrl'
        })
        .when('/deduccionGastoEmpleado', {
          templateUrl: 'vista/deduccionGastoEmpleado.html',
          controller: 'MainCtrl'
        })
        .when('/parametroRenta', {
              templateUrl: 'vista/parametroRenta.html',
              controller: 'MainCtrl'
            })
        .when('/periodosRenta', {
            templateUrl: 'vista/periodosRenta.html',
            controller: 'MainCtrl'
          })
        .when('/valoresConstantes', {
          templateUrl: 'vista/valoresConstantes.html',
          controller: 'MainCtrl'
        })
        .when('/procesaRol', {
          templateUrl: 'vista/procesaRol.html',
          controller: 'MainCtrl'
        })
        .when('/apruebaRol', {
          templateUrl: 'vista/apruebaRol.html',
          controller: 'MainCtrl'
        })
        .when('/calendario', {
              templateUrl: 'vista/calendario.html',
              controller: 'MainCtrl'
            })
      .otherwise({
        redirectTo: '/'
      });

  });
