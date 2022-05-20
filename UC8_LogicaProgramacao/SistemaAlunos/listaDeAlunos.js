/*
lista de cadastro de alunos
percorrer a lista
- percorrer de Zero até o número de alunos
- se o número for par, escreva par e o número correspondente.
- se o número for ímpar, escreva e o número correspondente
- se o número for 0, escreva Zero.
*/

/*
= atribuição de valores
== comparar se dois valores sao iguais (0== "0") - isso é verdade
=== comparar se os dois valores sao identicos (0 === "0") isso é falso
if (valorA == valor B)
if (senha = "1234")
*/
/*
let numeroDeAlunos = 10;

let contador=0

do
{    
    if (contador == 0)
    {
        console.log("O número atual é zero")
    }
    else if(contador %2 == 0)
    {
        console.log("O número "+contador+" é PAR");
    }
    else {
        console.log('O número ${contador} é IMPAR')
    }
    contador++
} while(contador < numeroDeAlunos)
*/
/*
let contador=0

while(contador < numeroDeAlunos)
{
    if (contador == 0)
    {
        console.log("O número atual é zero")
    }
    else if(contador %2 == 0)
    {
        console.log("O número "+contador+" é PAR");
    }
    else {
        console.log('O número ${contador} é IMPAR')
    }
}
*/

let numeroDeAlunos = 10;

for(let contador =0; contador < numeroDeAlunos; contador++)
{
    //console.log(contador)
    if (contador == 0)
    {
        console.log("O número atual é zero")
    }
    else if(contador %2 == 0)
    {
        console.log('O número '+contador+' é PAR');
    }
    else {
        console.log('O número '+contador+' é IMPAR')
    }
}

/*
let nomeDeAlunos = ["Alexandre", "André", "Carla", "Marcelo"];

for (let nome of nomeDeAlunos){
    console.log('Essa pessoa se chama ${nome}');
}
/*
/*
for(contador = 0; contador <=4; contador++){
    console.log(nomeDeAlunos[contador]);
}
*/

//console.log(nomeDeAlunos[2]);