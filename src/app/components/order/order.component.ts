import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Shop } from '../../models/shop';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  constructor(private shopService:ShopService,private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
  }
  carrito:any
  ngOnInit() {
    this.addLinkElement();
    /*this.loadScript('assets/xato/plugins/apex/apexcharts.min.js');
    this.loadScript('assets/xato/plugins/flatpickr/flatpickr.js');
    this.loadScript('assets/js/dashboard.js');*/
    this.carrito=JSON.parse(localStorage.getItem('carrito')||'')
    console.log(this.carrito)
  }

  eliminar(){
    this.carrito=''
    localStorage.removeItem('carrito')
  }
  ordenar(){
    /*product: Array<{
      price:Number;
      count:Number;
      name:string;
    }> = []*/
    if (this.carrito.product && this.carrito.product.length > 0) {
      const products = this.carrito.product.map((product:any) => {
        const { id, totalpriceproduct, ...rest } = product;
        return rest;
      });
      var data = new Shop('',localStorage.getItem('id')||'',localStorage.getItem('name')||'',this.carrito.total,products)
      this.shopService.postShop(data).subscribe(res=>alert('pedido enviado'))
    }




  }

  addLinkElement() {

    const link3: HTMLLinkElement = this.renderer.createElement('link');
    this.renderer.setAttribute(link3, 'rel', 'stylesheet');
    this.renderer.setAttribute(link3, 'href', 'assets/Xato/assets/css/apps/ecommerce.css');
    this.renderer.appendChild(this.document.head, link3);

  }
}
