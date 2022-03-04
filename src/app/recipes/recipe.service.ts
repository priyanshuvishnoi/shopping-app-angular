import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe 1',
      'This is a test',
      'https://picsum.photos/seed/pic/300',
      [new Ingredient('Tomato', 1), new Ingredient('French fries', 20)]
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is a test',
      'https://picsum.photos/seed/sum/300',
      [new Ingredient('Buns', 2), new Ingredient('Onion', 2)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return [...this.recipes];
  }

  addIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
