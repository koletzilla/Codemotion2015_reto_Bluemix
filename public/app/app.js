var app = angular.module('retoBluemix', []);

app.controller('MainController', ['$scope', 'CalculosService',function($scope,CalculosService) {

  $scope.calcularFac = function (){
    try {
      var Resultado = CalculosService.calcularFac($scope.factorial);
      $scope.resFac = Resultado
    } catch (e) {
      //alert(e.name + ': ' + e.message);
      $scope.resFac = e.name+ ": " + e.message;
    }
  }

  $scope.calcularMon = function (){
    try {
      var Resultado = CalculosService.calcularMon($scope.monedas);
      $scope.resMon = Resultado
    } catch (e) {
      $scope.resMon = e.name+ ": " + e.message;
    }
  }

  $scope.calcularEc = function (){
    try {
      var Resultado = CalculosService.calcularEc($scope.ecuaciones);
      $scope.resEc = Resultado
    } catch (e) {
      $scope.resEc = e.name+ ": " + e.message;
    }
  }

}]);
