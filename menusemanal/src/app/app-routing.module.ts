import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo:'about-us', pathMatch:'full'},
  {path: 'about-us', component: AboutUsComponent},
  {path: '**', component: NotFoundComponent} //always at the end of the paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
