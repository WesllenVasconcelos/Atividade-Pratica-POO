import { Produto } from './Produto';

export class Laptop extends Produto {
    constructor(
        nome: string,
        preco: number,
        quantidadeEmEstoque: number,
        public tamanhoTela: number
    ) {
        super(nome, preco, quantidadeEmEstoque);
    }

    // Método específico para Laptop
    exibirDetalhes(): string {
        return `${this.nome} - ${this.tamanhoTela}"`;
    }
}