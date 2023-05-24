// operadores logicos 
// operador logico AND o Y en español que se representa con &&
/*pemite conjugar dos o mas condiciones al mismo tiempo*/
/* la fucuncion mayorymenor retorname true si nuem es mayor que 5 Y menor que 10
de lo ontrario retorname false*/ 
function mayorYmenor(num) {
   if ( num > 5 && num < 10) {
    return ( true);
   } else {
    return( false);
   }
}
/* y si el numero es par */
function mayorYmenorYpar(num){
    if(num > 5 && num < 10 && num %2 === 0) {
        return ( true);
    } else {
        return ( false);
    }
}
/* CODIGO SIMPLE */
 function mayorYmenorYpar(num){
      if ( num > 5 && num < 10 & num %2 === 0) return true;
      else return false;
 }
 

 // OPERADOR "OR"o en español "O"
  /* nos permite conjugar dos o mas condiciones pero con u  comprotamiento 
  logico diferente */
  /* lo que aremos es declarar una condicional
  si este STR es al igual al str "henry " O si su longitud es < a 2 */

   function operqdoror(str){
    if (str == "henry" || str.length < 2 ) {
        return true;
     } else return false;
    
   }
    /* CODIGO SIMPLE*/
    function operadoror1(str){
        if ( str == "heny" || str.length < 2) return true;
        else return false;
    }

    // OPERADOR NOT O NEGHACION
    /* veremos una funcion de negacion es decir temdremos una opreacion
    o un valor de la function de perimiso a lo cual esta mostra lo comtrario
    porque estara negando el perimos con un valor boolenano*/
     function negacion(permiso){
        if (permiso) return ("tiene primiso");// sin el operador de negacion 
     }
     //con operador de nagacion
     function negacion2(permiso){
        if(!permiso) return ("tiene permiso");// con el operdor de negacion lo contrario !
        
     }


     // convinacion de operadores 
     /* si la funcion convinarnumeri es mayor que y es par o es iguala tres devuelve true delocontrio flae*/
     function convinarnumero1(num){
        if ( num > 9 && num % 2 ===0|| num ===3)
        return true;
        else return false;
        
      }
