# Reto de IBM Bluemix de la Codemotion 2015 [![Build Status](https://travis-ci.org/koletzilla/Codemotion2015_reto_Bluemix.svg)](https://travis-ci.org/koletzilla/Codemotion2015_reto_Bluemix)

- - -

### Introducción

Este código es una readaptación del que mostré para completar el reto que nos propusieron desde IBM Bluemix. Entre otros cambios he pasado a usar NodeJS como servidor y he incluido varios test. Espero que cumpla con todos los requisitos que pusieron (de ahí intentar hacer los test), pero si alguien encuentra algo que falle que avise ;).

El post original con la información lo tenéis en [el blog de la Codemotion](http://blog.codemotion.es/aceptas-el-reto-de-ibm/).

### Objetivo: aprender

Realmente el reto inicial no daba para mucho, al final eran 3 ejercicios que ya había realizado en otro momento (salvo el de las ecuaciones, cuyo cálculo al final me trajo un poco de cabeza, menos mal que conté con algo de ayuda :P), pero he querido aprovecharlo, darle una vuelta más y aprender todo lo que pudiera por el camino.

Le he dedicado bastante tiempo a este proyecto de lo que realmente merecía (Leer sobre [karma](http://karma-runner.github.io), [jasmine](http://jasmine.github.io), [testing en AngularJS](https://docs.angularjs.org/guide/unit-testing),  [Yeoman](http://yeoman.io), [Bluemix](http://www.ibm.com/cloud-computing/bluemix/), algo de [nodejs](https://nodejs.org/en/), [express](http://expressjs.com/), [bower](http://bower.io), [travis CI](https://travis-ci.org) ..). No todas las herramientas aparecen reflejadas en la implementación. Algunas las he leido con más profundidad, otras las he intentado usar sin lograr que funcionaran, pero con algunas sí que he tirado adelante y estoy contento con el resultado.

##### Sobre la implementación

Como debía de poder ejecutarse desde *Bluemix*, he implementado un servidor web para que sirva estáticos (bastante simple con *nodejs* con *express*, hay ejemplos en el [Github de IBM-Bluemix](https://github.com/IBM-Bluemix/node-helloworld) ) y he implementado toda la lógica en *AngularJS*. La parte de los cálculos la he dejado en un service que inyecto en el *controller*. La maquetación de la web la he hecho usando algo de *Bootstrap*, las dependencias las gestiono desde *npm* y *bower* y los test unitarios/de integración los ejecuto usando *Karma* y *Jasmine*.


##### Algunas de las cosas que he conseguido:

- He repasado conceptos en general relacionados con la programación web (un poquito de Bootstrap por aquí, algunos conceptos de javascript por allí..)
- He usado Karma con Jasmine para hacer test unitarios/de integración sobre Javascript.
- He practicado la refactorización del código inicial (principalmente el del controller) a través de "TDD" (lo básico, en este caso crear test, ver que fallaba, refactorizar y vuelta a empezar).
- He conocido otra plataforma de tipo PaaS (hasta ahora solo había tenido "experiencia" con Heroku).
- Y sobre todo, he leido y machacado herramientas que hasta ahora solo sabía que existían, algunas las he usado y otras no, pero espero poder usarlas todas más adelante.

#####  Cosas que se me han quedado en el tintero, para la próxima:

- No he conseguido poder hacer testing sobre AngularJS, he tenido que sacar los métodos fuera del Service para poder testearlos, no creo que sea la forma más correcta.
- He leído algo sobre los test End to End, para la próxima espero poder implementar algunos.
- He tenido problemas para poder configurar bien [generator-angular](https://github.com/yeoman/generator-angular), sospecho que algo a tenido que ver con que en un principio estaba usando la versión 5.1.1 de *NodeJS* y que alguna dependecia no lo soportaba (como *Karma* por ejemplo, que en la versión que uso lo máximo que soporta es la 4.X de *node*).
- No he acabado muy contento con la refactorización de los métodos. El control de errores y sacar los datos de los strings han añadido más líneas de lo que me esperaba.

##### "Errores" en la implementación



 - Los métodos devuelven cada resultado en cada línea, pero al mostrarse en el navegador, todo aparece en una sola línea.
 - Los métodos devuelven un string con el resultado, pero quizás deberían devolver alguna estructura y dejar la presentación para otro que tenga esa responsabilidad.

### Instalación

###### En local

++Requisitos:++
 - Nodejs 4.2.3 (Probablemente compatible con 4.X pero no compatible con ~5.1.1)
 - Npm correspondiente

Para instalar las dependencias (*npm* y *bower*), ejecutar:

`npm install`

Para ejecutar el servidor:

`npm start`

Para ejecutar las pruebas

`npm test`

###### En Bluemix

Con añadir el remote de la app creada y hacer un push a sus servidores, la instalación y la ejecución se realiza automáticamente.

## Resumen de las normas del reto

- El software debe correr en el PaaS de Bluemix
- Se puede usar cualquier lenguaje de programación que permita Bluemix

#### Ejercicios

###### Reto 1: Factoriales

Escribe un programa que calcula el factorial de cada valor de entrada.

++Datos de entrada++

La entrada consistirá en una serie de números enteros positivos entre 1 y 15 inclusive, cada uno en una línea por sí mismo. El final del archivo de datos de entrada se representa por una línea con un signo # como primer carácter.

```
1
4
3
#
```

++Datos de salida++

Debes de sacar, en una respuesta por línea, el factorial de cada número dado, en el formato que se muestra en el siguiente ejemplo.

```
1
24
6
```


###### Reto 2: El cambio

Estás escribiendo un módulo de software para una máquina expendedora de billetes instalada en una estación de tren. Tu módulo controla la forma en la que la máquina expendedora de billetes da el cambio a los clientes que pagan en efectivo.

Tu módulo tiene como entrada un número de conjuntos de datos. Cada conjunto de datos tiene dos elementos:

- La lista de monedas disponibles 
- la cantidad de dinero que debe ser dispensada al cliente como su cambio por el billete que acaba de comprar.

El programa debe decidir el conjunto de monedas a dispensar en base a:

- Tan pocas monedas como sea posible deben ser dispensadas.
- Si hay más de una manera de distribuir el mínimo número de monedas, la combinación de monedas de valor más alto, será la primera (y única).
- Para cada conjunto de datos de entrada solo puede haber exactamente una línea de salida. Puedes también asumir que si una moneda aparece en la lista de monedas, hay stock suficiente de esa moneda para atender el requerimiento. También puedes suponer que cada denominación será listada como mucho una vez en un conjunto de datos.

++Datos de entrada++

Cada transacción que gestiones con tu programa es representado como una única línea en el fichero de entrada. La línea comienza con una lista de monedas, separadas por comas, disponibles (en céntimos), seguido por dos puntos, y finalizado por la cantidad de dinero (en céntimos) que necesitan ser devueltos al cliente en concreto. La lista de monedas puede estar en cualquier orden (es decir, no tienen porqué estar ordenadas ni de mayor a menor, ni de menor a mayor).

Por ejemplo, imagina que tienes monedas de las siguientes cantidades 1 € (100 céntimos), 50, 10, 5, 20, 2 y 1 y queremos devolver al cliente 57 céntimos.

La línea de entrada sería la siguiente:

`100,50,20,10,5,2,:57`

La línea de entrada puede contener espacios o tabuladores, los cuales deben de ser ignorados. El final del fichero de entrada tendrá el carácter # como marca como el primer carácter. Puedes asumir que no habrá más de 20 tipos de moneda en la lista y que no tendrá más de 100 caracteres de tamaño. Os aseguramos que cuando probemos las aplicaciones no les pondremos líneas mal escritas.

++Datos de salida++

Tienes que listar las monedas que vas a dispensar. Para cada moneda, tienes que escribir su valor, seguida por el carácter “x” y seguida por último de la cantidad de monedas que vas a dispensar. Cada moneda con su cantidad respectiva tiene que estar separada por comas y será listada de forma descendente en valor. Por lo que la respuesta al ejemplo anterior sería:

`50x1,5x1,2x1`

como la forma más eficiente de devolver 57 céntimos con el conjunto de monedas disponible. No tendría que haber ningún espacio en la salida del reto y la línea de terminación (aquella que comienza con #) no debería tener ninguna línea en la salida.

Ejemplos de entrada:

```
100,50,20,10,5,2,:57
100,10,50,20,5,2, 1:36
#
```


Salida

```
50x1, 5x1, 2x1
20x1, 10x1, 5x1, 1x1
```


###### Reto 3: 2 ecuaciones con 2 incógnitas

Dado un par de ecuaciones, es posible deducir los valores de las variables que están contenidas. Imagina por ejemplo que tenemos las siguientes ecuaciones:

`4x+3y=24` (a esta ecuación la llamaremos [1] )
`5x+y=19` (a esta ecuación la llamaremos [2] )

Usando simples reglas matemáticas, podemos calcular el valor x de la siguiente manera:

1. Multiplica [2] por 3. De esta manera, 5x+y=19 se convierte en 15x+3y=57.
2. Resta 15x a ambos lados: 15x+3y=57 se convierte en 3y=57-15x.
3. Réstale 4x a ambos lados de [1]: 4x+3y=24 se convierte en 3y=24-4x.
4. Como tenemos que 3y=57-15x (deducida de [2]) y 3y=24-4x (deducida de [1]) podemos decir que: 57-15x=24-4x.
5. Restamos 24 de ambos lados: 33-15x=-4x.
6. Ahora sumamos 15x a ambos lados: 33 = 11x.
7. Finalmente, dividimos ambos lados por 11, con lo que tenemos que x=3.
8. Ahora que sabemos que x=3, podemos sustituir este valor en una de las ecuaciones, por ejemplo la [1]. De forma que 4x+3y=24 se convierte en4x3+3y=24. Finalmente, tendríamos que y=4.

De esta forma hemos deducido que x=3 e y=4.

Escribe un programa que coja una serie de pares de ecuaciones y que calcula x e y en cada caso. Cada ecuación tendrá la siguiente forma:

`NxSMy=R`

Donde:

- N y M son enteros naturales entre 1 y 100
- S es un signo, ya sea + o –
- R es un entero entre -5000 y 5000
- Cada ecuación (del par) estará en una línea separada, y siempre contendrá algún múltiplo de x e y. Cada par estará formado por un único # en su propia línea. El final de la entrada de datos será ## y estará en su propia línea. Los elementos de la ecuación estarán separados por cero o más caracteres en blanco (ya sean espacios en blanco como tal o tabuladores).

Tu programa deberá escribir la solución para cada par de ecuaciones, cada uno en una línea y en la siguiente forma:

x=P y y=Q, donde P y Q sean las respuestas al par de ecuaciones con dos incógnitas. Has de asumir que cada ecuación tiene solución y solo una.

++Ejemplo de entrada:++

```
4x+3y=24

5 x + y =19

#

2x+y=3

3x-y=2

#

##
```

Ejemplo de salida:

```
x=3 y=4

x=1 y=1
```

