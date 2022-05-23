/*let listaDePecas = ["Filtro de Ar", "Motor", "Disco de Freio"]

if (listaDePecas.length < 10)
{
    console.log("É possível cadastrar mais peças!!!")
}
else{
    console.log("Capacidade insuficiente, não é possível cadastrar")
}]*/

/*
let peso = 50

if(peso < 100)
{
    console.log("A peça deve pesar no mínimo 100g")
}
else
{
    console.log("A peça possui o peso adequado")
}
*/

//let nomePeca = "Disco de Freio"

/*
if(nomePeca.length >= 3)
{
console.log("Nome da peça adequado para o cadastro.")
}
else if(nomePeca.length ==0)
{
console.log("Nome da peça não pode ser vazio")
}
else
{
    console.log("O nome deve ter ao menos 3 caracteres para ser cadastrado.")
}
*/

/*
switch (nomePeca.length) {
    case 0:
        console.log("Nome da peça não pode ser vazio")
        break;
    case 1:
    case 2:
        console.log("O nome deve ter ao menos 3 caracteres para ser cadastrado.")
        break;
        default:
        console.log("Nome da peça adequado para o cadastro.")
        break;
}
*/

// Váriaveis, são um espaço na memória para guardar algum valor
let pesoPeca = 100

// pesoPeca - Camel Case
// peso_peca - Snake Case
// PesoPeca - Pascal Case

if(pesoPeca > 100) {
    console.log("Peso maior que 100g, logo, podemos cadastrar a peça!!!")
} else {
    console.log("Peso insuficiente, não é possível cadastrar.")
}

let numeroPecas;

numeroPecas = 10;
// Number

if(numeroPecas < 10) {
    console.log("Ainda há espaço na caixa, podemos cadastrar a peça")
} else {
    console.log("Não há espaço disponível na caixa")
}


let nomePeca = 'Di'

// ASCII Table

console.log("O comprimento do nome da peça é:", nomePeca.length)

if(nomePeca.length < 3) {
    console.log("Nome de peça muito curto, não é possível cadastrar")
} else {
    console.log("Nome de peça adequado, podemos cadastrar")
}
