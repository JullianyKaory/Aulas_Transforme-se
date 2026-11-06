let pessoa = { nome: "Lucas", idade: 21, analista: true };

pessoa.nome = "Kaory";
pessoa.idade = 20;

// criando nova propriedade
pessoa.namorando = true;

// deletando a propriedade
delete pessoa.namorando;
console.log(pessoa);


// posso atribuir métodos ao objeto (FUNÇÕES) ao objeto
// a palavra this reservada refere-se ao contexto do objeto
const usuario = {
    nome: "Alice",
    idade: 25,
    apresentar(){
        console.log(`Nome do usuário é ${this.nome}`);
        console.log(`Idade do usuário é ${this.idade}`);
    },
};

usuario.apresentar();


let computador = {
    monitor: true,
    SO: "Windows/linux",
    gabinete: true,
    memoriRam: 16,
    memoria: 512,
    mouse: true,
    ligarComputador(){
        console.log("Computador Ligado!");

    },
    abrirNavegador(){
        console.log("Navegador aberto")
    },
    fazerDownloads(){
        console.log("Fazendo Downloads")
    },
};

// Destruturação
// pego as caracteristicas do objeto e salvo as que eu quiser em uma única variável

// let gabinete = computador.gabinete;
let sistema = computador.SO;


const{monitor, gabinete} = computador;
console.log(gabinete);


let guaraRoupa = {
    porta: 6,
    gavetas: 5,
    espelho: true,
    abrirPortas(){},
    fecharPortas () {},
    abrirGavetas(){},
    fecharGavetas (){}
};

// Object.keys me traz todas as chaves do objeto
console.log(Object.keys(guaraRoupa));
console.log(Object.values(guaraRoupa));
console.log(Object.entries(guaraRoupa));

let lampada = {
    fabricante: "elgin",
    ligaLampada(){},
};

// Spread = espalhar as caracterirstica e métodos dos objetos em um outro objeto, sem alterar o origial
const quarto ={...computador, ...guaraRoupa, ...lampada};
console.log(quarto);
