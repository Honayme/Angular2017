import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {Pizza} from './pizza/pizza';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PizzaCloud9Service {
  private url = 'https://meanstackpizzasfactory-honayme.c9users.io/pizza/'

  constructor(private http: HttpClient) {
  }

  get(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.url)
  }

  getPizzaById(id): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.url + id)
  }

  savePizza(data): Observable<Pizza[]> {
    return this.http.post<Pizza[]>(this.url, data)
  }

  updatePizza(data): Observable<Pizza[]> {
    return this.http.put<Pizza[]>(this.url + "/" + data._id, data)
  }

  DeletePizza(id): Observable<any> {
    return this.http.delete(this.url + id)
  }

}

