import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../models/shop';
import { environment } from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})

export class ShopService {

  private apiUrl = environment.backend+'api/shop'
  
  constructor(private http: HttpClient) { }

  postShop(shop:Shop){
    return this.http.post<boolean>(this.apiUrl + "/", shop);
  }

  getShop(id:string){
    return this.http.get<Shop>(this.apiUrl + `/unique/${id}`);
  }

  deleteShop(id:string){
    return this.http.delete(this.apiUrl + `/${id}`)
  }

  getShops(){
    return this.http.get<Shop[]>(this.apiUrl + "/")
  }

  
  putShop(shop: Shop,id:string) {
    return this.http.put(this.apiUrl + `/${id}`,shop);
  }

  
  
}
