///////////////////////////////////////////////////////////////////////
//////////////////////////// FACTORIAL ////////////////////////////////
///////////////////////////////////////////////////////////////////////

var calcularFac = function(texto){
  var Resultado = "";
  var salir = false;
  if(texto==undefined || texto==""){
    throw new Error('Texto vacio')
  }
  var lineas = texto.split("\n");
  // Empieza por una almohadilla, error
  if(lineas[0] == "#"){ throw new Error('No puede empezar con una almohadilla');}
  for(i in lineas){
    if(lineas[i] == "#"){ // es una almohadilla y finaliza
      salir = true;
      break;
    }
    if(isNaN(lineas[i])){ // Si lo que hay en la línea no es un número, error
      throw new Error('En alguna línea no hay un número');
      //break;
    }
    // Si lo que hay en una línea es un espacio o un salto de línea, continuar
    if(lineas[i] == "" || lineas == "\n"){ continue;}
    if(lineas[i] < 1 || lineas[i] > 15){
      throw new Error('Uno de los números está fuera de rango');
    }
    var res = lineas[i]
    var cal = lineas[i]
    for(cal; cal>1; cal--){
      res = res*(cal-1)
    }
    Resultado += res + "\n"
  }
  if(salir != true){ // si a acabado de leer pero no ha leido la almohadilla, error
    throw new Error('No acaba con almohadilla');
  }
  return Resultado;
}

///////////////////////////////////////////////////////////////////////
////////////////////////////// CAMBIO /////////////////////////////////
///////////////////////////////////////////////////////////////////////

var calcularMon = function(texto){

  var salir = false;
  // Separar por líneas
  var lineas = texto.split("\n");
  var resultado = "";
  if(lineas[0] == "#"){ throw new Error('No puede empezar con una almohadilla');}
  for(i in lineas){
    if(lineas[i] == "#"){ // es una almohadilla y finaliza
      salir = true;
      break;
    }
    if(lineas[i] == "" || lineas == "\n"){ continue;} // si es una línea en blanco pasa
    resultado += calcularMon_calculos(lineas[i])
  }
  if(salir != true){ // si a acabado de leer pero no ha leido la almohadilla, error
    throw new Error('No acaba con almohadilla');
  }
  return (resultado);
}

/* Hace los cálculos tras recibir una línea */
var calcularMon_calculos = function(linea){
  // Separar la línea
  monedas= linea.replace(":",",").split(",")

  //Transformar el vector en enteros
  for(i in monedas){
    if(isNaN(monedas[i])){ // Si lo que hay en la línea no es un número, error
      throw new Error('En alguna línea hay algo que no es un número');
      //break;
    }
    monedas[i] = parseInt(monedas[i])
  }
  // Obtener el total
  total = monedas[monedas.length-1]
  monedas.pop()
  // Los ordena de forma descendente
  monedas.sort(function(a, b){return b-a})

  // Inicializar Vector resultado
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

  // Mostrar el vector resultado
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
  res += "\n"
  return (res);
}

///////////////////////////////////////////////////////////////////////
////////////////////// Factory: CalculosService ///////////////////////
///////////////////////////////////////////////////////////////////////

var app = angular.module('retoBluemix').factory('CalculosService', function() {
  // Define the DribbblePlayer function
  var calculos = {}

  calculos.calcularFac = function(texto){
    return calcularFac(texto);
  };

  calculos.calcularMon = function(texto){
    return calcularMon(texto);
  }

  // Return a reference to the function
  return (calculos);
});
