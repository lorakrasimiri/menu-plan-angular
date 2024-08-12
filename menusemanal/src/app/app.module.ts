import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PublicModule } from './public/public.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    UserModule,
    PublicModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
