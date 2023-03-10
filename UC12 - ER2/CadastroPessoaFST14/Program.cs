using CadastroPessoaFST14.Classes;

PessoaFisica novaPf = new PessoaFisica();

novaPf.nome = "Alana";
novaPf.cpf = "42233058836";

Console.WriteLine(novaPf.nome);

Console.WriteLine("Nome: " + novaPf.nome + " - CPF: " + novaPf.cpf);
Console.WriteLine($"Nome: {novaPf.nome} - CPF: {novaPf.cpf}");