export abstract class Beverage {

  description: string = 'Неизвестный напиток';

  protected constructor() {
  }

  abstract cost(): number;
}
