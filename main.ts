import { Smartphone } from './Smartphone';
import { Laptop } from './Laptop';

const smartphone = new Smartphone("iPhone", 5000, 10, "iOS");
const laptop = new Laptop("MacBook", 10000, 5, 13);

smartphone.aplicarDesconto(10);
laptop.aplicarDesconto(15);

console.log(`${smartphone.nome} preço final: ${smartphone.calcularPrecoFinal()}`);
console.log(`${laptop.nome} preço final: ${laptop.calcularPrecoFinal()}`);