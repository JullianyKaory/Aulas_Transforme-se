function gerarBoletim(nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3;

  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}