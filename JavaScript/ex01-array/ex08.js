let notas = [8, 7, 9, 6, 1];

  let quantidadeAprovados = 0;

  for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 7) {
      quantidadeAprovados++;
    }
  }