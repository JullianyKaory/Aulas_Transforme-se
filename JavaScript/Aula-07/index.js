// função é um determinado bloco de código que executa alguma coisa

function olaMundo() {
  alert("Hello World");
}

// função com parâmetros - são variáveis que tornam a função dinâmica
function saudacao(nome) {
  alert("Olá " + nome);
}

//função de soma
function somar(numero1, numero2) {
  return numero1 + numero2;
}

function mostrarResultado() {
  let argumento1 = Number(prompt("Digite o primero número: "));
  let argumento2 = Number(prompt("Digite o segundo número: "));
  alert("A soma recebe: " + somar(argumento1, argumento2));
}

// função de subtração
function subtracao(numero1, numero2) {
  return numero1 - numero2;
}

function mostrarSubtracao() {
  let argumento1 = Number(prompt("Digite o seu primeiro número: "));
  let argumento2 = Number(prompt("Digite o seu segundo número: "));
  alert("A subtração recebe: " + subtracao(argumento1, argumento2));
}


