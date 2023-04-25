//Função Anônima, pois não recebe parâmetro
function mostrarMensagem(){
    return console.log('Parabéns!');
}

function somarNumero(num1, num2){
    return num1+num2;
}

let resultado = somarNumero(2,5);
console.log(resultado);

let numeros = [1,2,3,4,5,6,7,8,9,10];
mostrarImpares(); //Hoisting em JS permite que a chamada da função venha antes da própria função
function mostrarImpares(){
    for(let i=0; i<numeros.length; i++){
        if(numeros[i]%2 != 0){
            console.log(numeros[i]);
        }
    }
}
/*
Links de apoio ao curso:

    [GITHUB] Repositório do Curso (Códigos dos exemplos e links) - https://github.com/WoMakersCode/javascript-womakerscode-irme

    [CURSO1] Curso Microsoft Learn – Criando um site simples usando HTML, CSS e JavaScript​: https://learn.microsoft.com/en-us/training/modules/get-started-with-web-development/?WT.mc_id=javascript-12143-gllemos

    [CURSO2] Desenvolvendo aplicativos Web com o Visual Studio Code: https://learn.microsoft.com/en-us/training/modules/develop-web-apps-with-vs-code/?WT.mc_id=javascript-12143-gllemos

    [CURSO3] Curso Microsoft Learn – Criando Aplicativos JavaScript com Node.Js​: https://learn.microsoft.com/en-us/training/paths/build-javascript-applications-nodejs/?WT.mc_id=javascript-12143-gllemos

    [PROJETO FINAL] Desenvolvendo a Intro do Star Wars com HTML, CSS, JavaScript & Node.js!: https://dev.to/azure/desenvolvendo-a-intro-do-star-wars-com-html-css-javascript-node-js-oae

 */