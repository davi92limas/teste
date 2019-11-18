import { Request } from "express";
import { BaseController } from "./BaseController";
import { Venda } from "../entity/Venda";

export class VendaController extends BaseController<Venda> {
  constructor() {
    super(Venda);
  }

  async save(request: Request) {
    let _Venda = <Venda>request.body;

    super.isRequired(_Venda.Produto, "O Produto é obrigatória");
    super.isRequired(_Venda.Cliente, "O Cliente é obrigatória");
    super.isRequired(_Venda.quantidade, "O Quintidade é obrigatória");
    //venda

    function subOperator({
      quantidadeEstoqui = _Venda.Produto.quantidadeDeEstoque,
      quantidade = _Venda.Produto.quantidade,
      result
    }: {
      quantidadeEstoqui: number;
      quantidade: number;
      result: Number;
    }) {
      result = quantidadeEstoqui - quantidade;
      console.log("Quantidade disponivel em estoque: " + result);
    }

    return super.save(_Venda, request);
  }
}
