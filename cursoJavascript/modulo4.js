//Operador ternário
let idade = 18;
let podeDirigir = idade >= 18 ? 'sim' : 'nao';

//if-else
if(idade >= 18){
}else{
}

//switch
let qualDataHoje = new Date();
switch(qualDataHoje.getDay()){
    case 0:
        console.log('Hoje é domingo');
        break;
    case 1:
        console.log('Hoje é segunda');
        break;
    case 2:
        console.log('Hoje é terça');
        break;
    case 3:
        console.log('Hoje é quarta');
        break;
    case 4:
        console.log('Hoje é quinta');
        break;
    case 5:
        console.log('Hoje é sexta');
        break;
    case 6:
        console.log('Hoje é sábado');
        break;
    default:
        break;
}

//while
let i = 1;
while(i < 10){
    i++;
}
do{
    i--
}while(i > 0)

//for
let numeros = [1 ,2 ,3];
for(let i = 0; i < numeros.length; i++){

}
/*


Links de apoio ao curso:

    [GITHUB] Repositório do Curso (Códigos dos exemplos e links) - https://github.com/WoMakersCode/javascript-womakerscode-irme

    [ARTIGO] Trabalhando com condicional if e else - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else

    [ARTIGO] Trabalhando com condicional switch - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch

    [ARTIGO] Trabalhando com declaração while - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while

    [ARTIGO] Trabalhando com declaração do-while - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/do...while

    [ARTIGO] Laço de repetição FOR - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for

*/