let jugar;
let contarA=0;
let contarB=0;


do{
  let jugadorA = prompt("Jugador A");
  let jugadorB = prompt("Jugador B");

if (jugadorA == "piedra" && jugadorB == "tijeras") {
  contarA++;
 
} else if (jugadorA == "piedra" && jugadorB == "papel") {
   contarB++;
  
} else if (jugadorA == "tijeras" && jugadorB == "piedra") {
  contarB++;
 
} else if (jugadorA == "papel" && jugadorB == "piedra") {
  contarA++;
  
} else if (jugadorA == "tijeras" && jugadorB == "papel") {
  contarA++;
  
} else if (jugadorA == "papel" && jugadorB == "tijeras") {
  contarB++;
 
} else if (jugadorA == jugadorB) {
  console.log("Empate");
}else{
    console.log("valor no valido para el juego");
} jugar = confirm("desea jugar otra vez")
}while (jugar);

   
  if (contarA > contarB){
     document.body.innerHTML = "El jugador A ha ganado! Cantidad de partidas ganadas "  + contarA;
  }  else if (contarA<contarB){
     document.body.innerHTML = "El jugador B ha ganado! Cantidad de partidas ganadas " + contarB; 
  } else if (contarA=contarB){
    document.body.innerHTML = "Hay un Empate!" ;
  }else{
    document.body.innerHTML ="valor no valido para el juego";
  }