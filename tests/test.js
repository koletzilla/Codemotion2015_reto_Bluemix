
describe("Testear Factorial", function() {

  // Test para datos correctos
  it("Calculo de un numero", function() {
    expect(calcularFac("5\n#")).toBe('120\n');
  });

  it("Calculo de un numero y linea vacia", function() {
    expect(calcularFac("5\n\n#")).toBe('120\n');
  });

  it("Calculo de varios números", function() {
    expect(calcularFac("5\n3\n4\n#")).toBe('120\n6\n24\n');
  });



  // Test para errores
  it("Lanza error si lista vacia", function() {
    expect(function(){calcularFac("")}).toThrow();
  });

  it("Lanza error si solo hay una almohadilla (vacia igualmente)", function() {
    expect(function(){calcularFac("#")}).toThrow();
  });

  it("Lanza error si no finaliza con una almohadilla)", function() {
    expect(function(){calcularFac("2\n3")}).toThrow();
  });

  it("Lanza error si encuentra algún valor que no es un número", function() {
    expect(function(){calcularFac("1\na\n3\n#")}).toThrow();
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
