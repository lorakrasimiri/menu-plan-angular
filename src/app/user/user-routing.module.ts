import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateIngredientComponent } from './components/create-ingredient/create-ingredient.component';
import { DeleteIngredientComponent } from './components/delete-ingredient/delete-ingredient.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent, children: [
      { path: 'new-ingredient', component: CreateIngredientComponent },
      { path: 'delete-ingredient', component: DeleteIngredientComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
