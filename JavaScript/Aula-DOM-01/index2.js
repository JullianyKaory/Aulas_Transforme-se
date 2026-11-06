const h1 = document.getElementById("texto1");
h1.style.color = "green";
h1.style.border = "3px solid blue";
h1.style.backgroundColor = "#f8edde";

const h12 = document.getElementById("texto2");
h12.classList.add("red");
h12.classList.remove("red");

// criando elementos
// elemento div criado
const div = document.createElement("div");

// texto de dentro do elemento
div.innerHTML = "Div criada pelo JS";

// estilos do elemento
div.style.width = "300px";
div.style.height = "300px";
div.style.backgroundColor = "green";
div.style.color = "#fff";

// document.body.appendChild(div);

