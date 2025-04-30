function decoratePedido(pedido) {
    return {
      ...pedido,
      dataFormatada: new Date(pedido.data).toLocaleDateString('pt-BR'),
      totalFormatado: `R$ ${pedido.subtotal.toFixed(2).replace('.', ',')}`,
      resumo: `Pedido de ${pedido.quantidade}x ${pedido.hamburguer?.nome || 'hamburguer'} por ${pedido.cliente?.nome || 'cliente'}`,
    };
  }
module.exports = { decoratePedido };
