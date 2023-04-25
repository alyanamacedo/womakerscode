//objetos
const pessoa = {
    nome: 'Alyana',
    sobrenome: 'Macedo',
    idade: 38,
    corOlhos: 'castanho'
};
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa["nome"]);

const pessoas = [
    {nome: 'Ayana', sobrenome: 'Macedo', idade: 38, corOlhos: 'castanho'},
    {nome: 'Willian', sobrenome: 'Silva', idade: 34, corOlhos: 'castanho escuro'},
    {nome: 'Zildalte', sobrenome: 'Ramos', idade: 62, corOlhos: 'castanho escuro'}
];
//console.log(pessoas[0].idade);
//pessoas.forEach( lista => { console.log(lista);});
for(let lista in pessoas){
    console.log(pessoas[lista]);
}
if('nome' in pessoa){
    console.log("A chave existe");
}
if('altura' in pessoa){
    console.log("A chave não existe");
}

/*
Links de apoio ao curso:

    [GITHUB] Repositório do Curso (Códigos dos exemplos e links) - https://github.com/WoMakersCode/javascript-womakerscode-irme

 */