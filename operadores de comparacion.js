 //operadores de compracion
 /* son operadores de >,<, >=, <=, ==. son operadores que 
 devuelven boolens mas espesificsamente true y false */

 
 console.log(7<6);
 console.log(2>65);
 console.log(6==9);
 
 // otros operador que se debe tener encuenta es el operador de == ===
 /* en este caso se deve tener encuenta dos cosas 
 el == conpara valores  es decir 5 == "5" SUS valores son iguales por lo cual seria true*/
 console.log( 5 == "5");

 /*mientras que el
 === conpara  EL TIPO DE DATO y EL VALOR
 es decir 5 === "5"  la comparacion que haces es estricta
 tanto al tipo de dato como el valor  en este caso seria false 
 porque los tipos de datos no son iguales 5 === "5" false*/

 console.log(5 === "5");

 //ASOCIATTIVIDA para ejecur el orden de las operacion esa seria una buena definicion
/* nos permite operar un problema que si los operadores tiene el mismo 
de presedencia nos dirifimos a la tabla de valores y vemos que en este caso 
la operacion se resuelve de derecha a izquierda */
 var a = 6;
 var b = 8;
 var c = (a = b);
 console.log(a);
 console.log(b);
 console.log(c);
