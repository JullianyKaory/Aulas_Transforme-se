// Array ~e uma variavel que armazena diversos dados
// Arrays iniciam sempre no indice 0

let numeros = [1, 2, 3, 4, 5];
let nomes = ["Lucas", "Kaiky", "Martinez", "Ferreira"];
let frutas = ["Manga", "Banana", "Melancia", "Morango", "Lichia"];

frutas[0] = "Abacaxi";
console.log(frutas[0]);

// .legth retorna o tamanho do array
console.log(frutas.length);

// push() - adiciona o elemento no fim do array
frutas.push("Lichia");

// pop() - remove o ultimo elemento do array
frutas.pop();

console.log(frutas);

// unshift() - Adiciona valores no inicio do array
frutas.unshift("Abacate");

// shift() - remove o primeiro elemento do array
console.log(frutas.shift());

console.log(frutas);

// includes() - Verifica se existe o elemento no array
// retorna true ou false
console.log(frutas.includes("Abacaxi"));

// indexOf() - retorna o indice especifico
// de determinado elemento. Retorna -1 se não achar.
console.log(frutas.indexOf("Abacaxi"));

// slice() - copia o array sem modificar o original
console.log(numeros.slice(0, 2));

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
