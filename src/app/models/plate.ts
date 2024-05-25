export class Plate {
    _id?: string;
    name: string;
    price: Number;
    description:string;
    category:string;
  
    constructor(
      _id :string = "",
      name: string = "",
      category: string = "",
      description: string = "",
      price: number = 0,
    ) {
      this._id = _id;
      this.name = name;
      this.category = category;
      this.description = description;
      this.price = price;
    }
  }