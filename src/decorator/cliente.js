function decorateCliente(cliente) {
    return {
      ...cliente,
      nomeFormatado: cliente.nome.toUpperCase(),
      telefoneFormatado: `(${cliente.telefone.slice(0, 2)}) ${cliente.telefone.slice(2, 7)}-${cliente.telefone.slice(7)}`,
      enderecoResumo: cliente.endereco.length > 30 ? cliente.endereco.slice(0, 30) + "..." : cliente.endereco,
    };
  }

module.exports = { decorateCliente };
