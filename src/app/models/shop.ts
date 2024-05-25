export class Shop {
    _id?: string;
    iduser: string;
    nameuser: string;
    total: string;
    product: Array<{
      price:Number;
      count:Number;
      name:string;
    }>;
  
    constructor(
      _id :string = "",
      iduser: string = "",
      nameuser: string = "",
      total: string = "",
      product: Array<{
        price:Number;
        count:Number;
        name:string;
      }> = []
    ) {
      this._id = _id;
      this.iduser = iduser;
      this.nameuser = nameuser;
      this.total = total;
      this.product = product;
    }
  }