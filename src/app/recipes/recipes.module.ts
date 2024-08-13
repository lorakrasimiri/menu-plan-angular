import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';

import { RecipesComponent } from './recipes.component';
import { AllRecipesComponent } from '../recipes/components/all-recipes/all-recipes.component';
import { RecipeDetailComponent } from '../recipes/components/recipe-detail/recipe-detail.component';


@NgModule({
  declarations: [
    AllRecipesComponent,
    RecipeDetailComponent,
    RecipesComponent,
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
