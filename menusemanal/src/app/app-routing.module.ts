import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {path: 'about-us', component: AboutUsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
