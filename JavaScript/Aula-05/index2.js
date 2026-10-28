// + - Adição
// - - Subtração
// * - Multiplicação
// ** - Potenciação
// / - Divisão
// % - Resto de divisão

// let numero1 = Number(prompt("Digite um número:"));
// let numero2 = Number(prompt("Digite outro número:"));

// let soma = numero1 + numero2;
// let subtracao = numero1 - numero2;
// let multiplicação = numero1 * numero2;
// let divisao = numero1 / numero2;
// let potenciacao = numero1 ** numero2;
// let restoDivisao = numero1 % numero2;

// alert("Soma: " + soma);
// alert("Subtração: " + subtracao);
// alert("Multiplicação: " + multiplicação);
// alert("Divisão: " + divisao);
// alert("Potência: " + potenciacao);
// alert("Resto de divisão: " + potenciacao);


let numero1 = Number(prompt("Digite um número: "));
let numero2 = Number(prompt("Digite um segundo número: "));



let restodiv = numero1 % numero2;

if (restodiv == "0"){
    alert("Esse número é par!")
} else {
    alert("Esse número é ímpar!")
}

alert(numero1 % 2 == 0 ? "Numero é par" : "Numero é impar")