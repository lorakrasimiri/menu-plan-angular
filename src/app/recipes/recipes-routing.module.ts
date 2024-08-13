import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AllRecipesComponent } from '../recipes/components/all-recipes/all-recipes.component';
import { RecipeDetailComponent } from '../recipes/components/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes.component';


const routes: Routes = [
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: 'all-recipes', component: AllRecipesComponent },
      { path: 'recipe-detail/:id', component: RecipeDetailComponent }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
