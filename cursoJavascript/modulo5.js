let eletrodomesticos = [
    'televisão',
    'geladeira',
    'liquidificador',
    'fogao',
    'microondas'
];
console.log(eletrodomesticos);

//MÉTODOS BÁSICOS 
//pop(); -> remove o último elemento do array e retorna-o
console.log(eletrodomesticos.pop());
//push(); -> adiciona um novo elemento ao final do array
eletrodomesticos.push('cafeteira')
console.log(eletrodomesticos);
//shift(); -> remove o primeiro elemento do array e retorna-o
console.log(eletrodomesticos.shift());
//unshift(); -> adiciona um novo elemento no início do array
eletrodomesticos.unshift('batedeira')
eletrodomesticos.unshift('lavadora')
console.log(eletrodomesticos);

//MÉTODOS IMPORTANTES DE ARRAYS
//join() -> une todos os elementos do array numa string
console.log(eletrodomesticos.join(' - ')); 
//slice() -> divide uma parte de um array, num novo array
console.log(eletrodomesticos.slice(2));
//concat() -> concatena dois arrays num novo array
let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];
let conjuntoNumeros = array1.concat(array2);
console.log(conjuntoNumeros);
//length() -> retorna o tamanho do array
console.log(conjuntoNumeros.length);
//indexOf() -> retorna a posição do elemento
console.log(eletrodomesticos);
let posicaoEletro = eletrodomesticos.indexOf('geladeira')
console.log(posicaoEletro);
//lastIndexOf() -> retorna a posição da última ocorrência
eletrodomesticos.unshift('geladeira')
console.log(eletrodomesticos);
console.log(eletrodomesticos.lastIndexOf('geladeira'));
//forEach() -> funciona similar ao for()
eletrodomesticos.forEach( listaEletros => { console.log(listaEletros);});
//map() -> cria um novo array baseado no retorno da função passada
eletrodomesticos = [
    {eletronico: 'televisão', preco: 1500},
    {eletronico: 'geladeira', preco: 2500},
    {eletronico: 'fogão', preco: 850},
    {eletronico: 'microondas', preco: 300}
];
const precoProdutos = eletrodomesticos.map(item => {
    return item.preco;
});
console.log(precoProdutos);
//filter() -> cria um novo array com a filtragem informada
const comprarEletro = eletrodomesticos.filter(eletrodomesticos => eletrodomesticos.preco >= 1000);
console.log(comprarEletro);
//reduce() -> 
let reais = [27.86, 71.95, 36.5];
let somarValores = reais.reduce((total, valor) => { return total+valor; });
console.log(somarValores);
//every() -> verifica se TODOS os elementos do array passam no teste
const produtoBarato = 500;
const promocaoEletro = eletrodomesticos.every(eletronico => eletronico.preco >= produtoBarato);
console.log(promocaoEletro);
//some() -> verifica se pelo menos um elemento do array passa no teste
const produtoCaro = 1000;
const eletricoCaro = eletrodomesticos.some(eletronico => eletronico.preco >= produtoCaro);
console.log(eletricoCaro);
//find() -> retorna o primeiro item do array que passa no teste
eletrodomesticos = [
    {eletronico: 'televisão', preco: 1500, setor: 'sala'},
    {eletronico: 'geladeira', preco: 2500, setor: 'cozinha'},
    {eletronico: 'fogão', preco: 850, setor: 'cozinha'},
    {eletronico: 'microondas', preco: 300, setor: 'cozinha'}
];
const produtosCozinha = eletrodomesticos.find(eletronico => eletronico.setor == 'cozinha');
console.log(produtosCozinha);
//findIndex() -> faz a contagem dos itens que passam no teste
const idades = [3,10,18,20];
const maiorIdade = 18;
const ehAdulto = idades.findIndex(idade => idade >= maiorIdade);
console.log(ehAdulto);

/*
Links de apoio ao curso:

    [GITHUB] Repositório do Curso (Códigos dos exemplos e links) - https://github.com/WoMakersCode/javascript-womakerscode-irme

    [ARTIGO] Trabalhando com Arrays em JavaScript - https://blog.geekhunter.com.br/arrays-em-javascript/

 */