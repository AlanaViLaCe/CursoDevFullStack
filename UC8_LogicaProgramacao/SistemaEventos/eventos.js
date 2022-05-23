
/* - Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
-Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
-Listar participantes e palestrantes por evento.
-Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
*/

let dataEvento = 31/05/2022
    if (dataEvento < 23/05/2022) 
    {
        console.log ("Evento não permitido, data inválida, inserir data futura!")
    } else {
        console.log ("Data válida, evento cadastrado com sucesso!")
    }

let idade = 15
    if (idade < 18) {
        console.log ("Cadastro não permitido, a idade deve ser superior a 18 anos")
    } else {
        console.log ("Idade mínima atingida, cadastro permitido!")
    }

let quantidadeParticipantes = 90
    if (quantidadeParticipantes < 100) {
        console.log ("Cadastro realizado com sucesso!")
    } else {
        console.log ("O cadastro não será permitido por ter excedido o limite de participantes neste evento!")
    }

let listaDeParticipantes = ["Alana", "Carlos", "Graci", "Alexandre", "André", "Carla", "Marcelo"]

for(contador = 0; contador < 100; contador++)
{
    console.log(listaDeParticipantes[contador]);
}