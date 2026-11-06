// Criando elemento com DOM
const titulo = document.createElement("h1");
// Adicionando contéudo de texto para elemento h1
titulo.textContent = "Este é um título criado com DOM!!!";
// Adicionando uma classe ao elemento h1
titulo.setAttribute("class", "titulo");
// Adicionando o elemento no body da página
document.body.appendChild(titulo);

// Selecionando elemento especifico pelo seletor CSS
const div = document.querySelector(".div1");
// childNOdes traz varias informações
console.log(div.childNodes);

// children - traz somente os elementos filhos (HTMLCollection)
console.log(div.children);

// Adicionando novo elemento <p> na DIV
div.innerHTML += "<p> Paragrafo adicionado com o DOM </p>";

//Adiconando nova classe ao elemento filho através do elemento pai
div.children[0].classList.add("blue");

// Insert Before - vai adicionar um elemento ao elemento PAI antes de um determinado elemento filho
const elementoPAI = document.querySelector(".div1");
const elementoReferencia = document.querySelector(".texto");
const novoElemento = document.createElement("h1");
novoElemento.textContent = "novo elemento criado";
elementoPAI.insertBefore(novoElemento, elementoReferencia);
