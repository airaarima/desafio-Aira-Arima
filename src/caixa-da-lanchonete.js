class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let cardapio = [
            {codigo:"cafe",descricao:"Café",valor:3},
            {codigo:"chantily",descricao:"Chantily(extra do Café)",valor:1.5},
            {codigo:"suco",descricao:"Suco natural",valor:6.2},
            {codigo:"sanduiche",descricao:"Sanduíche",valor:6.5},
            {codigo:"queijo",descricao:"Queijo (extra do Sanduíche)",valor:2},
            {codigo:"salgado",descricao:"Salgado",valor:7.25},
            {codigo:"combo1",descricao:"1 Suco e 1 Sanduíche",valor:9.5},
            {codigo:"combo2",descricao:"1 Café e 1 Sanduíche",valor:7.5}
        ]

        if(Object.values(itens)==""){
            return ("Não há itens no carrinho de compra!");
        }

        //separa a string "itens" para que o item solicitado seja comparado com o código no cardápio
        let obj = itens.join();
        let str = obj.split(','); 

        //verifica se o "item" desejado existe no cardapio, tambem separa itens na variável comida e suas respectivas quantidades na variável quantidade
        let comida = [];
        let quantidade = [];
        let itemValido = false;
        let quantidadeInvalida = false
        for(let i=0;i<cardapio.length;i++){
            for(let j=0;j<str.length;j+=2){
                if(str[j]===cardapio[i].codigo){
                    comida.push(str[j]);
                    itemValido=true;
                    break;
                }
            }
        }
        for(let i=0;i<cardapio.length;i++){
            for(let k=1;k<str.length;k+=2){
                if(str[k]==="0"){
                    quantidadeInvalida=true;
                    break;
                }else{
                    quantidade.push(Number(str[k]));
                }  
            }
            break;
        }
        if(itemValido==false){
            return("Item inválido!");
        }
        
        //verifica as compras e os metodos de pagamento
        let total = 0;
        let reajuste = 0;
        let novoTotal = 0;
        switch (metodoDePagamento) {
            case "dinheiro":
                for(let i=0;i<cardapio.length;i++){
                    for(let j=0;j<comida.length;j++){
                        if(comida[j]===cardapio[i].codigo){
                            if(quantidadeInvalida==true){
                                return "Quantidade inválida!";
                            }else{
                                total=total+(cardapio[i].valor*quantidade[j]);
                            }
                        }
                    }
                }
                reajuste = total * 0.05;
                novoTotal = total - reajuste;
                return(`R$ ${novoTotal.toFixed(2).replace(".",",")}`);

            case "credito":
                for(let i=0;i<cardapio.length;i++){
                    for(let j=0;j<comida.length;j++){
                        if(comida[j]===cardapio[i].codigo){
                            if(quantidadeInvalida==true){
                                return "Quantidade inválida!";
                            }else{
                                total=total+(cardapio[i].valor*quantidade[j]);
                            }
                        }
                    }
                }
                reajuste = total * 0.03;
                novoTotal = total + reajuste;
                return(`R$ ${novoTotal.toFixed(2).replace(".",",")}`);

            case "debito":
                for(let i=0;i<cardapio.length;i++){
                    for(let j=0;j<comida.length;j++){
                        if(comida[j]===cardapio[i].codigo){
                            if(quantidadeInvalida==true){
                                return "Quantidade inválida!";
                            }else{
                                total=total+(cardapio[i].valor*quantidade[j]);
                            }
                        }
                    }
                }
                return(`R$ ${total.toFixed(2).replace(".",",")}`);
        
            default:
                return("Forma de pagamento inválida!");
        }
    }

}

export { CaixaDaLanchonete };
