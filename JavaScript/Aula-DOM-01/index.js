// Obter elemento HTML pelo ID
// getElementById("idDoElemento");
const elemento = document.getElementById("texto1");
// console.log(elemento);

// Obter elementos pela classe (mais de um elemento)
// getElementsByClassName("classe");
const textos = document.getElementsByClassName("texts");
// console.log(textos);

// Obter elementos pelo nome da tag
// getElementsByTagName("nome da tag")
const paragrafos = document.getElementsByTagName("p");
// console.log(paragrafos);

// Obter elementos com alta precisão
// queriSelector("SeletorCSS");
const seletor = document.querySelector(".texts");
// console.log(seletor);

// Obter varios elementos  com querySelector (todos os elementos correspondentes ao selector)
// querySelectorAll("")
const elementosQuery = document.querySelectorAll(".texts");
// console.log(elementosQuery);

// acessando elementos filhos
// children traz um HTMLCollection com os elementos filhos
const div1 = document.querySelector(".div1");
console.log(div1.children);
console.log(div1.childNodes);

// innerHTML - permite com que eu modifique o HTML de elementos (adicionar tags, textos, etc.)
// div1.innerHTML = "Olá Node!";
// div1.innerHTML = "<p> Elemento Criado </p>";
// div1.innerHTML += "<p> Elemento 2 Criado </p>";

// modifica o conteudo de texto de determinado elemento
// textContent
const paragrafo1 = document.getElementById("paragrafo");
paragrafo1.textContent = "Mudando o Texto!!!";

// Definindo atributos
// const div2 = document.querySelectorAll("div");
// div2[1].textContent = "DIV2";
// div2[1].setAttribute("Class", "div2");
// div2[1].setAttribute("id", "div2");
// console.log(div2[1]);

const elementoH2 = document.getElementsByTagName("h2");
elementoH2[0].setAttribute("class", "elementoNovo");
elementoH2[0].setAttribute("id", "ElementoH2");
elementoH2[0].removeAttribute("id");
console.log(elementoH2[0]);

// Obtendo valores dos atributos
console.log(div1.getAttribute("class"));
