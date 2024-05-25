export class User {
    _id?: string;
    name: string;
    lastname: string;
    email:string;
    password:string;
    rol:string;
    address:string;
    phone:string;
  
    constructor(
      _id :string = "",
      name: string = "",
      lastname: string = "",
      email: string = "",
      password: string = "",
      rol: string = "",
      address: string = "",
      phone: string = "",
    ) {

      this._id = _id;
      this.name = name;
      this.lastname = lastname;
      this.email = email;
      this.password = password;
      this.rol = rol;
      this.address = address;
      this.phone = phone;
    }
  }

  export interface userLogin{
    email: string;
    password: string;
  }