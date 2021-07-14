tipos = new Array("Pedra","Tesoura","Papel");

let joao = tipos[1];
let andre = tipos[0];

if (joao == tipos[0]) {
    if(andre == tipos[0]){
        console.log("Empate");
    }

    else if(andre == tipos[1]){
        console.log("João Ganhou");
    }

    else if(andre == tipos[2]){
        console.log("André Ganhou");
    }

    else{
        console.log("ERROR");
      }

    
}

else if (joao == tipos[1]) {
    
    if(andre == tipos[0]){
        console.log("André Ganhou");
    }

    else if(andre == tipos[1]){
        console.log("Empate");
    }

    else if(andre == tipos[2]){
        console.log("João Ganhou");
    }

    else{
        console.log("ERROR");
      }


}

else if (joao == tipos[2]) {
    
    if(andre == tipos[0]){
        console.log("João Ganhou");
    }

    else if(andre == tipos[1]){
        console.log("André Ganhou");
    }

    else if(andre == tipos[2]){
        console.log("Empate");
    }

    else{
        console.log("ERROR");
      }

}

else{
  console.log("ERROR");
}