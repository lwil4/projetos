var nome_Usuario = prompt('Qual é o seu nome?');
var texto = document.querySelector('span');

while(nome_Usuario == '' ){// || nome_Usuario == null)
        var nome_Usuario = prompt('Qual é o seu nome?');       
}

if(nome_Usuario == null){
texto.textContent = 'usuário'
}else{

}

texto.textContent = nome_Usuario;