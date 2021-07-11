import { CondimentDecorator } from './condiment-decorator.abstract.class';
import { Beverage } from './beverage.abstract.class';

export class Mocha extends CondimentDecorator {
  beverage: Beverage;
  nameOfCondiment: string = 'Mocha';

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  cost(): number {
    return 0.20 + this.beverage.cost();
  }

  getDescription(): string {
    return `${this.beverage.description}, ${this.nameOfCondiment}`;
  }

}
