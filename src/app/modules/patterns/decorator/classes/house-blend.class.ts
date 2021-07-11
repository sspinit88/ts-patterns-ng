import { Beverage } from './beverage.abstract.class';

export class HouseBlend extends Beverage {

  nameOfBeverage: string = 'House blend';

  constructor() {
    super();
    super.description = this.nameOfBeverage;
  }

  cost(): number {
    return 0.89;
  }

}
