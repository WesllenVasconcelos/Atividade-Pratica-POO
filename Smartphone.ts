import { Produto } from './Produto';

export class Smartphone extends Produto {
    constructor(
        nome: string,
        preco: number,
        quantidadeEmEstoque: number,
        public sistemaOperacional: string
    ) {
        super(nome, preco, quantidadeEmEstoque);
    }

    // Método específico para Smartphone
    exibirDetalhes(): string {
        return `${this.nome} - ${this.sistemaOperacional}`;
    }
}