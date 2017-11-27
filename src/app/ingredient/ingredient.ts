export class Ingredient {
  _id: number;
  name: string;
  weight: string;
  price: number;
  // pizza_ids: [];
  create_at: Date;
  update_at: Date;


  constructor(name, weight, price) {
    this.name = name;
    this.weight = weight;
    this.price = price;
    // this.pizza_ids = pizza_ids;
  }

}
