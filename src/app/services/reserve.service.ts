import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserve } from '../models/reserve';
import { environment } from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  private apiUrl = environment.backend+'api/reserve'
  
  constructor(private http: HttpClient) { }

  postReserve(reserve:Reserve){
    return this.http.post<boolean>(this.apiUrl + "/", reserve);
  }

  getReserve(id:string){
    return this.http.get<Reserve>(this.apiUrl + `/unique/${id}`);
  }

  deleteReserve(id:string){
    return this.http.delete(this.apiUrl + `/${id}`)
  }

  getReserves(){
    return this.http.get<Reserve[]>(this.apiUrl + "/")
  }

  
  putReserve(reserve: Reserve,id:string) {
    return this.http.put(this.apiUrl + `/${id}`,reserve);
  }

  
  
}
