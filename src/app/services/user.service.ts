import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl = environment.backend+'api/user'
  
  constructor(private http: HttpClient) { }

  postUser(user:User){
    return this.http.post<boolean>(this.apiUrl + "/", user);
  }

  getUser(id:string){
    return this.http.get<User>(this.apiUrl + `/unique/${id}`);
  }

  deleteUser(id:string){
    return this.http.delete(this.apiUrl + `/${id}`)
  }

  getUsers(){
    return this.http.get<User[]>(this.apiUrl + "/")
  }

  
  putUser(user: User,id:string) {
    return this.http.put(this.apiUrl + `/${id}`,user);
  }

  
  
}
