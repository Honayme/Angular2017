import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import {ListContactService} from './list-contact.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule //Permet de récupérer directement un objet sans avoir à le convertir en Json
  ],
  providers: [ListContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Dans providers on marque le nom de la classe/service
//qu'on exporte et qui contient le tableau de listcontact

