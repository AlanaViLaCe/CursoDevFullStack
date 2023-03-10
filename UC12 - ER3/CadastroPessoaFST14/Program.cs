using CadastroPessoaFST14.Classes;

PessoaFisica novaPf = new PessoaFisica();

novaPf.nome = "Alana";
novaPf.cpf = "42233058836";
novaPf.rendimento = 3590.5f;

// Console.WriteLine(novaPf.nome);

// Console.WriteLine("Nome: " + novaPf.nome + " - CPF: " + novaPf.cpf);
// Console.WriteLine($"Nome: {novaPf.nome} - CPF: {novaPf.cpf}");

float impostoPagar = novaPf.CalcularImposto(novaPf.rendimento);

Console.WriteLine(impostoPagar);
Console.WriteLine($"R$ {impostoPagar:0.00}");
Console.WriteLine(impostoPagar.ToString("C"));