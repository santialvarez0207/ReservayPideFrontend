export class Table {
  _id?: string;
  type: string;
  count: Number;
  status:string;

  constructor(
    _id :string = "",
    type: string = "",
    count: Number = 0,
    status: string = "",
  ) {
    
    this._id = _id;
    this.type = type;
    this.count = count;
    this.status = status;
  }
}