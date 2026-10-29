let emailsCadastrados = ["admin@email.com", "contato@email.com"];
  let novoEmail = "joao@email.com";

  if (emailsCadastrados.includes(novoEmail)) {
    console.log("Erro: E-mail já está cadastrado.");
  } else {
    emailsCadastrados.push(novoEmail);
    console.log("Cadastro realizado com sucesso!");
    console.log(emailsCadastrados);
  }
