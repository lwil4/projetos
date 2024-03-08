var nome_Usuario = prompt('Qual é o seu nome?');
var texto = document.querySelector('span');

texto.textContent = nome_Usuario;

while(nome_Usuario == ''){
        var nome_Usuario = prompt('Qual é o seu nome?');       
}