class CaixaDaLanchonete {
  pagamento_array = ["dinheiro", "debito", "credito"];

  desconto_array = [-0.05];

  taxa_array = [0.03];

  itensExtra_array = ["chantily", "queijo"];
  
  itensPrincipais_array = ["cafe","sanduiche"];

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

    if(itens.length < 1) {
      return "Não há itens no carrinho de compra!";
    }

    if(Quantidadeitens.length < 1) {
        return "Quantidade inválida!";
    }  

    if(this.itensExtra_array.length > 1 && this.itensPrincipais_array[0]||[1]) {
        return "Item extra não pode ser pedido sem o principal";
    }
    
    if(this.itensExtra_array.length >= 1 && this.itensPrincipais_array.length === 1){}

    if (metodoDePagamento == this.pagamento_array[0]) {
      total *= 0.95;
    } else if (metodoDePagamento == this.pagamento_array[2]) {
      total *= 1.03;
    }
      else if (metodoDePagamento == this.pagamento_array[1]){
        total *= 1;
    } else {
      return "Forma de Pagamento Inválida";
    }

    for (const itemCodigo in itens) {
      if (itemCodigo.itens) {
        total += this.itens[itemCodigo].valor * itens[itemCodigo];
      }
        else{
        return "Item inválido!";
      }
    }

    return total.toFixed(2);
  }
}
  
export { CaixaDaLanchonete };
