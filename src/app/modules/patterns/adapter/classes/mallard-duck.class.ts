import { Duck } from '../interfaces/duck.interface';

export class MallardDuck
  implements Duck {
  fly(): void {
    console.log(`I'm MallardDuck and I flying!`);
  }

  quack(): void {
    console.log(`Кря-кря-кря`);
  }
}
