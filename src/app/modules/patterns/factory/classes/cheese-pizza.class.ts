import { Pizza, PizzaRecipe } from '../interfaces/pizza.interface';

export class CheesePizza implements Pizza {
  recipe: PizzaRecipe = {
    ingredients: ['item', 'item', 'item', 'item'],
    recipe: 'This is CheesePizza recipe.',
  };

  getRecipe(): PizzaRecipe {
    return this.recipe;
  }
}
