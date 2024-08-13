import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.css',
  providers: [RecipeService]
})
export class AllRecipesComponent implements OnInit{
  public recipes: RecipeModel[] = [];


  constructor(public recipeService: RecipeService){
    
  };

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipes);
  }

}
