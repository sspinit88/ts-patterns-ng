import { Duck } from '../interfaces/duck.interface';
import { Turkey } from '../interfaces/turkey.interface';

export class TurkeyAdapter
  implements Duck {

  turkey: Turkey;

  constructor(t: Turkey) {
    this.turkey = t;
  }

  fly(): void {
    for (let i = 0; i < 2; i++) {
      this.turkey.fly();
    }
  }

  quack(): void {
    this.turkey.gobble();
  }
}
