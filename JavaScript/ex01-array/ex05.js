let livros = ["Senhor dos Anéis", "Nárnia", "O Hobbit"];
let posicao = livros.indexOf("O Hobbit");
console.log(
    posicao !==-1
    ? `O livro está na posição ${posicao}`
    : `Livro não encontrado`,
);