
/*-Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
-Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
-Listar participantes e palestrantes por evento.
-Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
*/

let listaDeParticipantes = []

if (listaDeParticipantes.length < 100)
{
    console.log("Cadastro realizado com sucesso!!!")
}
else{
    console.log("Excedido o número máximo de participantes neste evento, não é possível cadastrar")
}
