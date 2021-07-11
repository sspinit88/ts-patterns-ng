import { Pizza, PizzaRecipe } from '../interfaces/pizza.interface';

export class ClamPizza implements Pizza {
  recipe: PizzaRecipe = {
    ingredients: ['item', 'item', 'item', 'item'],
    recipe: 'This is ClamPizza recipe.',
  };

  getRecipe(): PizzaRecipe {
    return this.recipe;
  }
}
