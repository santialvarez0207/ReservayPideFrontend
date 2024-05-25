import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from '../models/table';
import { environment } from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private apiUrl = environment.backend+'api/table'
  
  constructor(private http: HttpClient) { }

  postTable(table:Table){
    return this.http.post<boolean>(this.apiUrl + "/", table);
  }

  getTable(id:string){
    return this.http.get<Table>(this.apiUrl + `/unique/${id}`);
  }

  deleteTable(id:string){
    return this.http.delete(this.apiUrl + `/${id}`)
  }

  getTables(){
    return this.http.get<Table[]>(this.apiUrl + "/")
  }

  
  putTable(table: Table,id:string) {
    return this.http.put(this.apiUrl + `/${id}`,table);
  }

  
  
}
