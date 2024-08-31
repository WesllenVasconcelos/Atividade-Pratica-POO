import { Item } from './Item';

export class Produto extends Item {
    constructor(
        nome: string,
        preco: number,
        public quantidadeEmEstoque: number
    ) {
        super(nome, preco);
    }

    aplicarDesconto(percentual: number): void {
        this.preco = this.preco - (this.preco * percentual) / 100;
    }

    calcularPrecoFinal(): number {
        return this.preco;
    }
}