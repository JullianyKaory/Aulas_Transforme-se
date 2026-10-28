// Array ~e uma variavel que armazena diversos dados

let numeros = [1, 2, 3, 4, 5];
let nomes = ["Lucas", "Kaiky", "Martinez", "Ferreira"];
let frutas = ["Manga", "Banana", "Melancia", "Morango", "Lichia"];

frutas[0] = "Abacaxi";
console.log(frutas[0]);

// .legth retorna o tamanho do array
console.log(frutas.length);

frutas.unshift("Abacate");
frutas.shift();

console.log(frutas);
