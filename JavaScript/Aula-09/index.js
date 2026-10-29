// for (let i = 0; i < numeros.length; i++) {
//   console.log(numeros[i]);
// }

// forEach()
// elemento, indice
// Para cada elemento - faço alguma coisa
// Para cada indice - faço alguma coisa
let nomes = ["Ana", "João", "SMS", "Mayara", "Alice"];

// nomes.forEach((elemento, indi5, ce) => {
//   console.log(elemento);
//   console.log(indice);
// });

// MAP
// Retorna um novo array
// De acordo com a condição
let numeros = [1, 2, 3, 4, 6, 7, 8, 9];

// let dobroNumeros = numeros.map((numero) => {
//   return numero * 2;
// });

// filter()
// Vai filtrar elementos do array
// De acordo com a condição e retornar um novo array
let idades = [10, 21, 20, 12, 15, 16];

console.log(idades.filter((idade) => idade >= 18));
console.log(numeros.filter((numero) => numero % 2 === 0));

// find()
// Traz somente o primeiro elemento que se encaixar
// Na condição
console.log(idades.find((idade) => idade >= 18));

// reduce()
// Vai reduzir o array para um único valor
let numeros2 = [1, 2, 3, 4, 5];

let reduzir = numeros2.reduce((acumulador, elemento) => {
  return acumulador + elemento;
}, 0);

console.log(reduzir);
