function decorateHamburguer(hamburguer) {
    return {
      ...hamburguer,
      ingredientesArray: hamburguer.ingredientes.split(',').map(i => i.trim()),
      descricaoResumo: hamburguer.descricao?.slice(0, 50) + '...' || '',
      precoFormatado: `R$ ${hamburguer.preco.toFixed(2).replace('.', ',')}`,
    };
  } 

module.exports = { decorateHamburguer };
