import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DeleteIngredientComponent } from './components/delete-ingredient/delete-ingredient.component';
import { CreateIngredientComponent } from './components/create-ingredient/create-ingredient.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    DeleteIngredientComponent,
    CreateIngredientComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
