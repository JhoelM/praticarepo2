// condicionales if else
/* se usa para dar condiciones hasta esto IF de lo contraio as esto otro ELSE 
devuelven true y false en la mayoria de los casos
*/



function viajar(destino) {
    if ( destino === "brasil") {
        return ("gire a la izquierda");
    
    } else if ( destino === "colombia"){
        return ("gire a las deecha");
    } else {
        return ( "me perdi");
    }
}

viajar("bculo");

function salirdepaseo (x){
    if ( x === "alparque") {
        return ( "ir defrente");
    } else if ( x === "las cariñosas"){
        return ( " al fondo a la derecha");
    } else {
        return ( " volver a casa") ;
    }
}