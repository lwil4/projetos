var nome_Usuario = prompt('Qual é o seu nome?');
var texto = document.querySelector('span');

while(nome_Usuario == ''){
        var nome_Usuario = prompt('Qual é o seu nome?');       
}

texto.textContent = nome_Usuario;