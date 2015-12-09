///////////////////////////////////////////////////////////////////////
//////////////////////////// FACTORIAL ////////////////////////////////
///////////////////////////////////////////////////////////////////////

/**
 * Algoritmo principal para calcular el factorial. Divide el texto incial en
 * diferentes líneas y gestiona los calculos
 */
var calcularFac = function(texto){
  var lineas = troceoInicial(texto);

  var Resultado = "";
  var salir = false;
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
    Resultado += calcularFac_factorial(lineas[i]) + "\n"
  }
  if(salir != true){ // si a acabado de leer pero no ha leido la almohadilla, error
    throw new Error('No acaba con almohadilla');
  }
  return Resultado;
};

/** Calcula el factorial de un número */
var calcularFac_factorial = function(numero){
  var res;
  var cal = res = numero;
  for(cal; cal>1; cal--){
    res = res*(cal-1);
  }
  return res;
};

///////////////////////////////////////////////////////////////////////
////////////////////////////// CAMBIO /////////////////////////////////
///////////////////////////////////////////////////////////////////////

/**
 * Algoritmo principal para calcular el cambio. Divide el texto incial en
 * diferentes líneas y gestiona los calculos
 */
var calcularMon = function(texto){
  var lineas = troceoInicial(texto);

  var salir = false;
  var resultado = "";
  for(i in lineas){
    if(lineas[i] == "#"){ // es una almohadilla y finaliza
      salir = true;
      break;
    }
    if(lineas[i] == "" || lineas == "\n"){ continue;} // si es una línea en blanco pasa
    resultado += calcularMon_calculos(lineas[i])
  }
  // si a acabado de leer pero no ha leido la almohadilla, error
  if(salir != true){ throw new Error('No acaba con almohadilla');}
  return resultado;
};

/*+ Gestiona las operaciones a realizar sobre cada línea */
var calcularMon_calculos = function(linea){
  monedas = linea.replace(":",",").split(","); // Separar la línea

  //Transformar el vector en enteros
  for(i in monedas){
    if(isNaN(monedas[i])){ // Si lo que hay en la línea no es un número, error
      throw new Error('En alguna línea hay algo que no es un número');
    }
    monedas[i] = parseInt(monedas[i]);
  }
  // Obtener el total
  total = monedas[monedas.length-1];
  monedas.pop();

  monedas.sort(function(a, b){return b-a}) //orden descendente
  var resultado = calcularMon_algMonedas(monedas, total);
  var stringRes = calcularMon_MonedasToString(monedas, resultado);

  return stringRes += "\n";
};

/** Algoritmo que selecciona las monedas */
var calcularMon_algMonedas = function(monedas, total){

  var resultado = [] // Vector donde aparecerán la cantidad de monedas seleccionadas de cada tipo
  for(i in monedas){
      resultado.push(0)
  }
  // Algortimo
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
          continuar = false;
      }
  }
  return resultado;
};

/** Devuelve un string con la salida especificada */
var calcularMon_MonedasToString = function(monedas, resultado){
  var stringRes = "";
  primero = true;
  for(i in monedas){
    if(resultado[i] != 0){
      if(primero){
          primero = false;
      }else {
        stringRes = stringRes + ", ";
      }
      stringRes = stringRes + monedas[i] + "x" + resultado[i];
    }
  }
  return stringRes;
};

///////////////////////////////////////////////////////////////////////
//////////////////////////// ECUACIONES ///////////////////////////////
///////////////////////////////////////////////////////////////////////

/**
 * Algoritmo principal para calcular el cambio. Divide el texto incial en
 * diferentes líneas y gestiona los calculos
 */
var calcularEc = function(texto){

  var lineas = troceoInicial(texto);

  var primeraEc, segundaEc;
  var salir = false;
  var resultado = "";
  var numeroEcuacion = 1;
  for(i in lineas){
    if(lineas[i] == "" || lineas == "\n"){ continue;} // si es una línea en blanco pasa
    // ¿A partir de aquí podrían ser quizás dos switch anidados?
    if(lineas[i] == "#"){ // Si lee una almohadilla, hace los calculos de las ecuaciones
      if(numeroEcuacion == 3){
        resultado += calcularEc_calcularEc(primeraEc,segundaEc);
        numeroEcuacion = 1;
      }else{
        throw new Error('El formato no es correcto, revisa las almohadillas y las ecuaciones');
      }
    }
    else if(lineas[i] == "##"){ // Acaba de leer
      if(numeroEcuacion == 1){
        salir = true;
      }else{
        throw new Error('El formato no es correcto, revisa las almohadillas y las ecuaciones');
      }
    }
    else if(numeroEcuacion == 1){ // lee la primera ecuación
      primeraEc = calcularEc_obtenerXYZ(lineas[i]);
      numeroEcuacion ++;
    }
    else if(numeroEcuacion == 2){ // lee la segunda ecuación
      numeroEcuacion = 3
      segundaEc = calcularEc_obtenerXYZ(lineas[i]);
    }
    else{
      throw new Error('El formato no es correcto, revisa las almohadillas')
    }
  }
  // si a acabado de leer pero no ha leido la almohadilla, error
  if(salir != true){ throw new Error('No acaba con doble almohadilla');}

  return resultado;
};

/** Dada una ecuación en un string, devuelve los valores de "x", "y" y "z" */
var calcularEc_obtenerXYZ = function(linea){
  var x,y,z;
  if(isNaN(linea.split("x")[0])){
      x = 1;
  }else{
      x = parseInt(linea.split("x")[0]);
  }
  restante = linea.split("x")[1];
  if(isNaN(restante.split("y")[0])){
      if(restante.split("y")[0].indexOf("+") == -1){
        y = -1;
      }else{
        y = 1;
      }
  }else{
      y = parseInt(restante.split("y")[0]);
  }
  z = parseInt(restante.split("y")[1].replace("=",""));
  if(isNaN(x) || isNaN(y) || isNaN(z)){
    throw new Error('No se ha podido reconocer algún caracter en las ecuaciones')
  }
  return {"x": x, "y":y, "z":z};
};

/** Dados dos objetos que representan dos ecuaciones de dos incognitas,
 * calcula los valores de "x", "y" y "z"
 */
var calcularEc_calcularEc = function(ec1,ec2){

  var y = (ec2.x*ec1.z - ec1.x*ec2.z) / (ec1.y*ec2.x - ec1.x*ec2.y)
  var x = (ec1.z - ec1.y*y)/ec1.x
  return "x=" + x + " " + "y=" + y + "\n";
};

///////////////////////////////////////////////////////////////////////
///////////////////////// Funciones comunes ///////////////////////////
///////////////////////////////////////////////////////////////////////

var troceoInicial = function (texto){
  if(texto==undefined || texto==""){
    throw new Error('Texto vacio');
  }
  var lineas = texto.split("\n");
  if(lineas[0] == "#" || lineas[0] == "##"){ throw new Error('No puede empezar con almohadillas');}
  return lineas;
};

///////////////////////////////////////////////////////////////////////
////////////////////// Service: CalculosService ///////////////////////
///////////////////////////////////////////////////////////////////////

var app = angular.module('retoBluemix').service('CalculosService', function() {
  var calculos = {}
  calculos.calcularFac = function(texto){
    return calcularFac(texto);
  };

  calculos.calcularMon = function(texto){
    return calcularMon(texto);
  };

  calculos.calcularEc = function(texto){
    return calcularEc(texto);
  };
  // Return a reference to the function
  return calculos;
});
