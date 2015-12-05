var app = angular.module('retoBluemix', []);

app.controller('MainController', ['$scope',function($scope) {

  $scope.prueba = "Ejercicios Bluemix"

  $scope.calcularFac = function (){
    valores = $scope.factorial.split("\n")
    var resultado = ""
    for(i in valores){
      var res = valores[i]
      var cal = valores[i]
      for(cal; cal>1; cal--){
        res = res*(cal-1)
      }
      resultado += res + "\n"
    }
    $scope.resFac = resultado
  }

  $scope.calcularMon = function (){

    monedas= $scope.monedas.replace(":",",").split(",")
    total = parseInt(monedas[monedas.length-1])
    monedas.pop()
    for(i in monedas){
      monedas[i] = parseInt(monedas[i])
    }

    monedas.sort(function(a, b){return b-a})

    var resultado = []
    for(i in monedas){
        resultado.push(0)
    }
    // calcular

    continuar = true
    monedaSelec = 0
    while(continuar){
        if(total >= monedas[monedaSelec]){
            total -= monedas[monedaSelec]
            resultado[monedaSelec] += 1
        }else{
            monedaSelec += 1
        }
        if(total == 0){
            continuar = false
        }
    }
    // Imprimir 100,10,50,20,5,2, 1:36

    var res = ""
    primero = true;
    for(i in monedas){
      if(resultado[i] != 0){
        if(primero){
            primero = false
        }else {
          res = res + ", "
        }
        res = res + monedas[i] + "x" + resultado[i]
      }
    }
    $scope.resMon = ""
    $scope.resMon = res
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
