///////////////////////////////////////////////////////////////////////
//////////////////////////// FACTORIAL ////////////////////////////////
///////////////////////////////////////////////////////////////////////

describe("El Factorial (calcularFac) ", function() {
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

describe("El método del cambio (calcularMon) ", function() {
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


/*
asserts
expect(a).toBe(b);
expect(a).not.toBe(null);

Valores simples:
 expect(a).toEqual(12);

Expresiones regularess;
 expect(message).toMatch("bar");
expect(message).not.toMatch(/quux/);

expect(a.foo).toBeDefined();
expect(a.bar).not.toBeDefined();

expect(a).toBeNull();

expect(a).toBeFalsy();
expect(foo).not.toBeFalsy();

expect(a).toContain("bar");
expect(a).not.toContain("quux");



*/
