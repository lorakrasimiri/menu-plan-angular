import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';

import { HomeComponent } from './components/home/home.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { PublicComponent } from './public.component';



@NgModule({
  declarations: [
    HomeComponent,
    AllRecipesComponent,
    AllRecipesComponent,
    RecipeDetailComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
