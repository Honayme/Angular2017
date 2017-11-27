import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PizzaCloud9Service} from '../pizza-cloud9.service';


@Component({
  selector: 'app-pizza-delete',
  templateUrl: './pizza-delete.component.html',
  styleUrls: ['./pizza-delete.component.css']
})

export class PizzaDeleteComponent implements OnInit {


  constructor(private servicePizza: PizzaCloud9Service, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.servicePizza.DeletePizza(id)
      .subscribe(res => {
        this.servicePizza = res;
        console.log((this.servicePizza));
      })
  }

}
