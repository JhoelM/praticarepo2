//operador suma o adicion
1
 console.log(3+9);


 // operador resta

 console.log(9-4);

// y asi con la multipliocacion y division
 console.log(5*8);
 console.log(34/2);
 console.log(9 / 6);
 

 // modulo o sobrante 
/* representado con el signo de % que muestra como resultado el sobrante de 
una division  que es el resutado  */
  console.log(9 % 6);


//presendencia de operadores
/* es el orden en el que un operador se resuelve 
el de mayor presedencia se respeta y se resuelve */

console.log( 8+6*2-6 );
 
/* este problema se resuelve respetando la presedencoia de operadores
primero se resuleve la multipilicacion despues la suma y asi sececibvamente
pero en javascript se puede jugar con el orden de precedencia colocando un parentesis
u otro signo*/

console.log((8 + 6) * 2 -6 );

//adicion y string
/* los operadores nolo sirven para concatenar numeros si no tambien string
*/
 console.log('hola ' + 'mariana');
 var nombre= 'marian';
 var saludo= 'hola ' + nombre;
 console.log(saludo);
  
  var gustos = 'chicas';
  var tipo = 'con grandes tt';
  var megustan = 'mujeres ' + tipo;
  console.log(megustan);