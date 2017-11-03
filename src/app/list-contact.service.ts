import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from '@angular/common/http'


@Injectable()
export class ListContactService {

  //Liste de contact brute
listContact = [
    {nickname: "Honayme"},
    {name: "Thomas"},
    {Adresse: "mon adresse"},
    {Tel: "0606060606"},
    {mail: "thomas.mirabile@gmail.com"},
  ];

  fakeUsers = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http : HttpClient) { //Injection de dépendance

  }

  get(){
    return this.http.get(this.fakeUsers); //Observable 
  }

}




//Create an array of contact object
//Iterate through the liste with *ngFor directive
//Think about repsonsabilities and reusabilit
//1 component + 1 service at least
