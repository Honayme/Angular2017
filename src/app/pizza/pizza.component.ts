import { Component, OnInit } from '@angular/core';
import { PizzaCloud9Service } from '../pizza-cloud9.service';


@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  listPizza: any ;

  constructor(private moncul: PizzaCloud9Service ) { }

  ngOnInit() {
    this.moncul.get()
    // When pizza arrive on our data stream, set it equal to our local listPizza array.
      .subscribe(res => {
        this.listPizza = res;
        console.log((this.listPizza));
      })
  }

}
