import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Pizza } from  './pizza';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class PizzaCloud9Service {
  private url = 'https://meanstackpizzasfactory-honayme.c9users.io/pizza'

  constructor(private http : HttpClient) { }

  get(): Observable<Pizza[]>{
      return this.http.get<Pizza[]>(this.url)
  }

  getPizzaById(id): Observable<Pizza[]>{
    return this.http.get<Pizza[]>(this.url+"/"+id)
  }

  savePizza(data): Observable<Pizza[]>{
    return this.http.post<Pizza[]>(this.url, data)
  }

//Here is a promess but we need a observable
//Observables can be quite powerful and are worth learning about if you are making lots of http calls
//   showPizza(id) {
//     return new Promise((resolve, reject) => {
//       this.http.get('/pizza/' + id)
//         .map(res => <Pizza[]> res.json())
//         .subscribe(res => {
//           resolve(res)
//         }, (err) => {
//           reject(err);
//         });
//     });
//   }

  // savePizza(data) {
  //   return new Promise((resolve, reject) => {
  //     this.http.post('/', data)
  //       .map(res => res.json())
  //       .subscribe(res => {
  //         resolve(res);
  //       }, (err) => {
  //         reject(err);
  //       });
  //   });
  // }
  //
  // updatePizza(id, data) {
  //   return new Promise((resolve, reject) => {
  //     this.http.put('/'+id, data)
  //       .map(res => res.json())
  //       .subscribe(res => {
  //         resolve(res);
  //       }, (err) => {
  //         reject(err);
  //       });
  //   });
  // }
  //
  // deletePizza(id) {
  //   return new Promise((resolve, reject) => {
  //     this.http.delete('/'+id)
  //       .subscribe(res => {
  //         resolve(res);
  //       }, (err) => {
  //         reject(err);
  //       });
  //   });
  // }


}
