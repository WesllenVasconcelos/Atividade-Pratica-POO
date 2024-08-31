export abstract class Item {
    constructor(public nome: string, public preco: number) {}

    abstract calcularPrecoFinal(): number;
}
