function ex1() {
  const titulo = document.createElement("h1");
  titulo.setAttribute("id", "titulo");
  titulo.textContent = "Olá, meu caro visitante! O que busca hoje?";
  document.body.appendChild(titulo);
  console.log("ex1");
}
ex1();

function ex2() {
  const paragrafo = document.createElement("p");
  paragrafo.textContent = "Texto Importante!!!";
  paragrafo.style.color = "red";
  paragrafo.style.fontSize = "24px";
  document.body.appendChild(paragrafo);
}
ex2();

function ex3() {
  const img = document.createElement("img");
  img.setAttribute("src", "foto.jpg");
  img.setAttribute("alt", "foto dinamica");
  document.body.appendChild(img);
}
ex3();

function ex4(){
  const div = document.createElement("div");
  div.textContent = "Modo Escuro Ativado";
  div.style.backgroundColor = "#000";
  div.style.color = "#fff";
  div.style.width = "200px";
  document.body.appendChild(div);
}
ex4();