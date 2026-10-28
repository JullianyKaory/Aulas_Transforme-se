function fazerSaque(saldoAtual, valorSaque) {
  if (valorSaque > saldoAtual) {
    return "Saldo insuficiente";
  } else {
    let novoSaldo = saldoAtual - valorSaque;
    return "Saque realizado. Novo saldo: R$" + novoSaldo;
  }
}
