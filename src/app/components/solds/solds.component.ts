import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Shop } from '../../models/shop';


@Component({
  selector: 'app-solds',
  templateUrl: './solds.component.html',
  styleUrl: './solds.component.css'
})
export class SoldsComponent{
constructor(private shopService:ShopService ){}
  data:Array<Shop>=[]
  select:Shop = new Shop()
  ngOnInit(){
    this.shopService.getShops().subscribe(res=>{
      console.log(res)
      this.data=res as Shop[]
    })
  }

  modal(id:string){
    this.select=this.data.find((el:any)=>el._id==id)||new Shop()
    const modal = document.getElementById("modal");
    if(modal){
      modal.style.display = "flex";
    }

  }
  close(){
    const modal = document.getElementById("modal");
    if(modal){
      modal.style.display = "none";
    }
  }
}
