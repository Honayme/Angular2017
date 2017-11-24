import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PizzaCloud9Service } from './pizza-cloud9.service';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PizzaDescComponent } from './pizza-desc/pizza-desc.component';
import { PizzaCreateComponent } from './pizza-create/pizza-create.component';
import { PizzaUpdateComponent } from './pizza-update/pizza-update.component'; // Prevent error 404

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    IngredientComponent,
    PizzaDescComponent,
    PizzaCreateComponent,
    PizzaUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ PizzaCloud9Service, {provide: LocationStrategy, useClass: HashLocationStrategy} ], // Prevent error 404
  bootstrap: [AppComponent]
})
export class AppModule { }
