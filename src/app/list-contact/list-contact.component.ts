import { Component, OnInit } from '@angular/core';
import {ListContactService} from "../list-contact.service";

@Component({
  selector: 'app-list-contact', // On créer une balise, voir dans app.Ccomponent.ts
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})

export class ListContactComponent implements OnInit {
  contacts: any; // Attr contact de type any
  fakeContact: any;

  //Dans le constructeur on déclare listContactService
  //qui prend le type/schéma de la classe ListContactService
  constructor(private listContactService: ListContactService) {
    this.contacts = this.listContactService.listContact;
  //On initialise la variable contact avec le type + contenu de la variable listContact

    this.listContactService
      .get()
      .subscribe( //Méthode pour "s'abonner" à un observable
      res => {
        this.fakeContact = res;
      }
    )

  }



  ngOnInit() {

  }

}
