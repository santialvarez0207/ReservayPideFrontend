export class Reserve {
    _id?: string;
    iduser: string;
    idtable: string;
    date: string;
    hourstart: string;
    hourend: string;
    count:Number;
  
    constructor(
      _id :string = "",
      iduser: string = "",
      idtable: string = "",
      date: string = "",
      hourstart: string = "",
      hourend: string = "",
      count: Number = 0,
    ) {
      this._id = _id;
      this.iduser = iduser;
      this.idtable = idtable;
      this.date = date;
      this.hourstart = hourstart;
      this.hourend = hourend;
      this.count = count;
    }
  }