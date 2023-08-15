class CaixaDaLanchonete {
  pagamento_array = ["dinheiro", "debito", "credito"];

  desconto_array = [-0.05];

  taxa_array = [0.03];

  itensExtra_array = ["chantily", "queijo"];

  itens = {
    cafe: { descricao: "Café", valor: 3.0 },
    chantily: { descricao: "Chantily (extra do Café)", valor: 1.5 },
    suco: { descricao: "Suco Natural", valor: 6.2 },
    sanduiche: { descricao: "Sanduíche", valor: 6.5 },
    queijo: { descricao: "Queijo (extra do Sanduíche)", valor: 2.0 },
    salgado: { descricao: "Salgado", valor: 7.25 },
    combo1: { descricao: "1 Suco e 1 Sanduíche", valor: 9.5 },
    combo2: { descricao: "1 Café e 1 Sanduíche", valor: 7.5 },
  };

  calcularValorDaCompra(metodoDePagamento, itens) {
    let total = 0;
    let Quantidadeitens = 0;
    let itensExtra = this.itensExtra_array;
    let carrinho = 0;

    if (itens.length < 1) {
      return "Não há itens no carrinho de compra!";
    }

    for (const itemCodigo in itens) {
      if (this.itens.hasOwnProperty(itemCodigo)) {
        total += this.itens[itemCodigo].valor * itens[itemCodigo];
      } else {
        return "Item inválido!";
      }
    }

    for (const Quantidadeitens in itens) {
      if (Quantidadeitens >= 1) {
        continue;
      } else {
        return "Quantidade inválida!";
      }
    }

    for (const itensExtra in itens) {
      if (itensExtra[0] + itens[cafe]) {
        continue;
      } else if (itensExtra[1] + itens[sanduiche]) {
        continue;
      } else {
        return "Item extra não pode ser pedido sem o principal";
      }
    }

    if (metodoDePagamento == this.pagamento_array[0]) {
      total *= 1 + this.desconto_array[0];
    } else if (metodoDePagamento == this.pagamento_array[2]) {
      total *= 1 + this.taxa_array[0];
    } else if (metodoDePagamento == this.pagamento_array[1]) {
      total *= 1;
    } else {
      return "Forma de Pagamento Inválida";
    }

    return total.toFixed(2);
  }
}

export { CaixaDaLanchonete };
