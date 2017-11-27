import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
// import { Pizza } from './pizza/pizza';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Ingredient} from "./ingredient/ingredient";


@Injectable()
export class IngredientCloud9Service {
  private url = 'https://meanstackpizzasfactory-honayme.c9users.io/ingredient/'

  constructor(private http : HttpClient) { }

  get(): Observable<Ingredient[]>{
    return this.http.get<Ingredient[]>(this.url)
  }

  getIngredientById(id): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.url + id)
  }

  saveIngredient(data): Observable<any> {
    return this.http.post<Ingredient[]>(this.url, data)
  }

  updateIngredient(data): Observable<Ingredient[]> {
    return this.http.put<Ingredient[]>(this.url + "/" + data._id, data)
  }

  DeleteIngredient(id): Observable<any> {
    return this.http.delete(this.url + id)
  }
}
