import { Duck } from '../interfaces/duck.interface';
import { Turkey } from '../interfaces/turkey.interface';
import { MallardDuck } from './mallard-duck.class';
import { WildTurkey } from './wild-turkey.class';
import { TurkeyAdapter } from './turkey-adapter.class';

export class DuckTestDrive {
  main(): void {
    const duck: Duck = new MallardDuck();
    const turkey: Turkey = new WildTurkey();
    const turkeyAdapter: Duck = new TurkeyAdapter(turkey);

    this.testDuck(duck);
    this.testDuck(turkeyAdapter);
  }

  testDuck(duck: Duck): void {
    duck.fly();
    duck.quack();
  }
}
