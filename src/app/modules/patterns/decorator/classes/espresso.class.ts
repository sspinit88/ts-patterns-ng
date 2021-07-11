import { Beverage } from './beverage.abstract.class';

export class Espresso extends Beverage {

  nameOfBeverage: string = 'Espresso';

  constructor() {
    super();
    super.description = this.nameOfBeverage;
  }

  cost(): number {
    return 1.99;
  }

}
