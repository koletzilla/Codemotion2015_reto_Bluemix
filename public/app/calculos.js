
var calcularFac = function(texto){
  var Resultado = "";
  var salir = false;
  if(texto==undefined || texto==""){
    throw new Error('ValueError')
  }

  var lineas = texto.split("\n");
  if(lineas[0] == "#"){ throw new Error('ValueError');} // Empieza por una almohadilla, error
  for(i in lineas){
    if(lineas[i] == "#"){ // es una almohadilla y finaliza
      salir = true;
      break;
    }
    if(isNaN(lineas[i])){ // Si lo que hay en la línea no es un número, error
      throw new Error('ValueError');
      //break;
    }
    // Si lo que hay en una línea es un espacio o un salto de línea, continuar
    if(lineas[i] == "" || lineas == "\n"){ continue;}
    var res = lineas[i]
    var cal = lineas[i]
    for(cal; cal>1; cal--){
      res = res*(cal-1)
    }
    Resultado += res + "\n"
  }

  if(salir != true){ // si a acabado de leer pero no ha leido la almohadilla, error
    throw new Error('ValueError');
  }

  return Resultado;
}


var app = angular.module('retoBluemix').factory('CalculosService', function() {
  // Define the DribbblePlayer function
  var calculos = {}

  calculos.calcularFac = function(texto){
    return calcularFac(texto);
  };

  calculos.calcularMon = function(linea){
    monedas= linea.replace(":",",").split(",")
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
    return (res);
  }

  // Return a reference to the function
  return (calculos);
});
