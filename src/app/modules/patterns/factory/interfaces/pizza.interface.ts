/*
* Описываю интерфейсы пиццы и рецептов
* */
export interface Pizza {
  recipe: PizzaRecipe;

  getRecipe(): PizzaRecipe;
}

export interface PizzaRecipe {
  ingredients: string[];
  recipe: string;
}
