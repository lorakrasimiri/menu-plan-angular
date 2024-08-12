import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {AllRecipesComponent} from './components/all-recipes/all-recipes.component';
import {RecipeDetailComponent} from './components/recipe-detail/recipe-detail.component';



import { PublicComponent } from './public.component';



const routes: Routes = [
  {
    path: 'public', component: PublicComponent, children: [
      { path: 'all-recipes', component: AllRecipesComponent },
      { path: 'home', component: HomeComponent },
      { path: 'recipe-detail/:id', component: RecipeDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
