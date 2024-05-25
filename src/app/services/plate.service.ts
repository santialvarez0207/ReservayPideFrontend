import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plate } from '../models/plate';
import { environment } from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class PlateService {

  private apiUrl = environment.backend+'api/plate'
  
  constructor(private http: HttpClient) { }

  postPlate(plate:Plate){
    return this.http.post<boolean>(this.apiUrl + "/", plate);
  }

  getPlate(id:string){
    return this.http.get<Plate>(this.apiUrl + `/unique/${id}`);
  }

  deletePlate(id:string){
    return this.http.delete(this.apiUrl + `/${id}`)
  }

  getPlates(){
    return this.http.get<Plate[]>(this.apiUrl + "/")
  }

  
  putPlate(plate: Plate,id:string) {
    return this.http.put(this.apiUrl + `/${id}`,plate);
  }

  
  
}
