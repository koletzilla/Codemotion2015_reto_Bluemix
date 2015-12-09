///////////////////////////////////////////////////////////////////////
//////////////////////////// FACTORIAL ////////////////////////////////
///////////////////////////////////////////////////////////////////////

describe("El Factorial (calcularFac)", function() {
  // Test para datos correctos
  it("calcula de un numero", function() {
    expect(calcularFac("5\n#")).toBe('120\n');
  });

  it("calcula de un numero y linea vacia", function() {
    expect(calcularFac("5\n\n#\n")).toBe('120\n');
  });

  it("calcula de varios números", function() {
    expect(calcularFac("5\n3\n4\n#\n")).toBe('120\n6\n24\n');
  });

  it("solo calcula números entre 1 y 15", function() {
    expect(function(){calcularFac("5\n16\n4\n#")}).toThrow();
    expect(function(){calcularFac("5\n11\n4\n#")}).not.toThrow();
    expect(function(){calcularFac("5\n1\n0\n#")}).toThrow();
  });

  // Test para errores
  it("lanza error si lista vacia", function() {
    expect(function(){calcularFac("")}).toThrow();
  });

  it("lanza error si solo hay una almohadilla (vacia igualmente)", function() {
    expect(function(){calcularFac("#")}).toThrow();
  });

  it("lanza error si no finaliza con una almohadilla)", function() {
    expect(function(){calcularFac("2\n3")}).toThrow();
    expect(function(){calcularFac("2\n3\n")}).toThrow();
  });

  it("lanza error si encuentra algún valor que no es un número", function() {
    expect(function(){calcularFac("1\na\n3\n#")}).toThrow();
  });
});

///////////////////////////////////////////////////////////////////////
////////////////////////////// CAMBIO /////////////////////////////////
///////////////////////////////////////////////////////////////////////

describe("El método del cambio (calcularMon)", function() {
  // Test para datos correctos
  it("calcula una línea", function(){
    expect(calcularMon("100,50,20,10,5,2,:57\n#")).toBe("50x1, 5x1, 2x1\n");
    expect(calcularMon("100,10,50,20,5,2, 1:36 \n#")).toBe("20x1, 10x1, 5x1, 1x1\n");
  });

  it("calcula varias líneas", function(){
    expect(calcularMon("100,50,20,10,5,2,:57\n 100,10,50,20,5,2, 1:36\n#")).toBe("50x1, 5x1, 2x1\n20x1, 10x1, 5x1, 1x1\n");
  });

  // Test para errores
  it("lanza error si el texto está vacio", function() {
    expect(function(){calcularFac("")}).toThrow();
  });

  it("lanza error si solo hay una almohadilla (vacia igualmente)", function() {
    expect(function(){calcularFac("#")}).toThrow();
  });

  it("lanza error si no acaba con una almohadilla", function(){
    expect(function(){calcularMon("100,50,20,10,5,2,:57\n")}).toThrow();
  });

  it("lanza error si hay algo que no es un número", function(){
    expect(function(){calcularMon("100,50,a,10,5,2,:57\n")}).toThrow();
  });

});

///////////////////////////////////////////////////////////////////////
//////////////////////////// ECUACIONES ///////////////////////////////
///////////////////////////////////////////////////////////////////////

describe("El método para calcular ecuaciones (calcularEc)", function() {

  // Test para datos correctos
  it("calcula dos ecuaciones con 2 incognitas", function() {
    expect(calcularEc("4x+3y=24\n5 x + y =19\n#\n##")).toBe('x=3 y=4\n');
    expect(calcularEc("2x+y=3\n3x-y=2\n#\n##")).toBe('x=1 y=1\n');
  });

  it("calcula varias ecuaciones de 2 incognitas", function() {
    expect(calcularEc("4x+3y=24\n5 x + y =19\n#\n2x+y=3\n3x-y=2\n#\n##")).toBe('x=3 y=4\nx=1 y=1\n');
  });

  // Test para errores
  it("lanza error si lista vacia", function() {
    expect(function(){calcularEc("")}).toThrow();
  });

  it("lanza error si solo hay una almohadilla (vacia igualmente)", function() {
    expect(function(){calcularEc("#")}).toThrow();
  });

  it("lanza error si no finaliza con una almohadilla)", function() {
    expect(function(){calcularEc("4x+3y=24\n5 x + y =19\n")}).toThrow();
  });

  it("lanza error si falta la almohadilla que separa las ecuaciones)", function() {
    expect(function(){calcularEc("4x+3y=24\n5 x + y =19\n#\n2x+y=3\n3x-y=2\n##")}).toThrow();
    expect(function(){calcularEc("4x+3y=24\n5 x + y =19\n2x+y=3\n3x-y=2\n#\n##")}).toThrow();
  });

  it("lanza error si encuentra algún valor que no es un número", function() {
    expect(function(){calcularEc("4x+3y=24\n5 x + y =a\n#\n2x+y=3\n3x-y=2\n#\n##")}).toThrow();
    expect(function(){calcularEc("4x+3y=24\n5 x + y =19\n#\n2x+a=3\n3x-y=2\n#\n##")}).toThrow();
  });
});
