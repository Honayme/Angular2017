export class Pizza {
  _id: number;
  name: string;
  desc: string;
  picture: string;
  price: number;
  ingredient_ids: any[];
  create_at: Date;
  update_at: Date;


  constructor(name, desc, picture, price, ingredient_ids){
    this.name = name ;
    this.desc = desc ;
    this.picture = picture ;
    this.price = price ;
    this.ingredient_ids = ingredient_ids ;
  }

}


