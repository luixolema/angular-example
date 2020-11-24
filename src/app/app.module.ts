import { PageNotFoundComponent } from './app-components/page-not-found/page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-components/app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ComposeMessageComponent } from './app-components/compose-message/compose-message.component';
import { LoginComponent } from './app-components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,

    // The appRoutingModule must be the last one in order to import first all the routes defined in the children modules
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
