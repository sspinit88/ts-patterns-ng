import { Pizza } from '../interfaces/pizza.interface';
import { CheesePizza } from './cheese-pizza.class';
import { PepperoniPizza } from './pepperoni-pizza.class';
import { ClamPizza } from './clam-pizza.class';

export class SimplePizzaFactory {

  private pizza: any = null;

  constructor() {
  }

  createPizza(pizzaType: string): Pizza {

    switch (pizzaType) {
      case 'cheese':
        this.pizza = new CheesePizza();
        break;
      case 'pepperoni':
        this.pizza = new PepperoniPizza();
        break;
      case 'clam':
        this.pizza = new ClamPizza();
        break;
      default:
        this.pizza = new CheesePizza();
        break;
    }

    return this.pizza;
  }

}
