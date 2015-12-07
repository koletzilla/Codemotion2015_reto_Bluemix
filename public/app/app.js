var app = angular.module('retoBluemix', []);

app.controller('MainController', ['$scope', 'CalculosService',function($scope,CalculosService) {

  $scope.calcularFac = function (){

    try {
      var Resultado = CalculosService.calcularFac($scope.factorial);
      $scope.resFac = Resultado
    } catch (e) {
      //alert(e.name + ': ' + e.message);
      $scope.resFac = "Error en la entrada de texto"
    }

    /*
    var Resultado = CalculosService.calcularFac($scope.factorial);
    if(Resultado.error){
      $scope.resFac = "Error en la entrada de texto"
    }else{
      $scope.resFac = Resultado.valor
    }
    */
  }

  $scope.calcularMon = function (){
    $scope.resMon = CalculosService.calcularMon($scope.monedas);
  }

    $scope.calcularEc = function (){
      ecuaciones = $scope.ecuaciones.split("\n")

      console.log(ecuaciones[0])
      console.log(ecuaciones[1])

      var x1,x2,y1,y2,z1,z2

      primEc = ecuaciones[0]
      // primera ec
      if(isNaN(primEc.split("x")[0])){
          x1 = 1
      }else{
          x1 = parseInt(primEc.split("x")[0])
      }


        restante = primEc.split("x")[1]
      if(isNaN(restante.split("y")[0])){
        if(restante.split("y")[0].indexOf("+") == -1){
          y1 = -1
        }else{
          y1 = 1
        }

      }else{
          y1 = parseInt(restante.split("y")[0])
      }


      z1 = parseInt(restante.split("y")[1].replace("=",""))
      console.log(x1 + " " + y1 + " " + z1)

      primEc = ecuaciones[1]
      // primera ec
      if(isNaN(primEc.split("x")[0])){
          x2 = 1
      }else{
          x2 = parseInt(primEc.split("x")[0])
      }


        restante = primEc.split("x")[1]
      if(isNaN(restante.split("y")[0])){
          if(restante.split("y")[0].indexOf("+") == -1){
            y2 = -1
          }else{
            y2 = 1
          }
      }else{
          y2 = parseInt(restante.split("y")[0])
      }


      z2 = parseInt(restante.split("y")[1].replace("=",""))
      console.log(x2 + " " + y2 + " " + z2)

      // solución
/*
      ax by = c
      dx ey = f

      a b*/

      y = (x2*z1 - x1*z2) / (y1*x2 - x1*y2)

      x = (z1 - y1*y)/x1
      console.log(x + " " + y)

      $scope.resEc = "X=" + x + " " + "Y= " + y
    }
}]);
