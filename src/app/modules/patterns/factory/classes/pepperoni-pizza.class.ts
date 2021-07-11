import { Pizza, PizzaRecipe } from '../interfaces/pizza.interface';

export class PepperoniPizza implements Pizza {
  recipe: PizzaRecipe = {
    ingredients: ['item', 'item', 'item', 'item'],
    recipe: 'This is PepperoniPizza recipe.',
  };

  getRecipe(): PizzaRecipe {
    return this.recipe;
  }
}
