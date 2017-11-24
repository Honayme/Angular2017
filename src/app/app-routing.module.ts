import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// import { AppComponent } from "./app.component";
import { PizzaComponent } from './pizza/pizza.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import {PizzaDescComponent} from './pizza-desc/pizza-desc.component';



const routes: Routes = [
  {path: '', redirectTo: 'pizza', pathMatch: 'full'},
  // {path: '', component: AppComponent},
  {path: 'pizza', component: PizzaComponent},
  {path: 'pizza/:id', component: PizzaDescComponent},
  {path: 'ingredient', component: IngredientComponent},
];

// export const routeur: ModuleWithProviders = RouterModule.forRoot(router)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
