var nome_Usuario = prompt('Qual é o seu nome?'); //variável para perguntar o nome//
var texto = document.querySelector('span');
//linha de respiro//
while(nome_Usuario == '' ){// || nome_Usuario == null
nome_Usuario = prompt('Qual é o seu nome?'); //repete a caixinha clique OK sem texto definido//  
}
//linha de respiro//
if(nome_Usuario == null){ 
texto.textContent = 'usuário'
}else{
texto.textContent = nome_Usuario; //se a resposta da caixinha der null, ele ira repetir o código até que haja uma resposta válida//
}
//linha de respiro para garantia de funcionamento do código//