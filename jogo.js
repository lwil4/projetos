let numeroSecreto = Math.floor(Math.random() * 10);
console.log(numeroSecreto);

let chute ='';

while(chute==''){
    chute = prompt('Escolha um número de 0 a 10');
}

if(numeroSecreto == chute){
    alert('Parabéns, você acertou :D');
} else{
    alert('Que pena, você errou );');
}


