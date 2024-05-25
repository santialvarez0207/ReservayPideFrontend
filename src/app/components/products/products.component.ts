import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
  }
  ngOnInit() {
    this.addLinkElement();
    this.actualizar(0)
    /*this.loadScript('assets/xato/plugins/apex/apexcharts.min.js');
    this.loadScript('assets/xato/plugins/flatpickr/flatpickr.js');
    this.loadScript('assets/js/dashboard.js');*/
  }
  
  imagenes:Array<string> = ['https://www.portafolio.co/files/article_new_multimedia/uploads/2022/04/12/6255e2e41db6c.jpeg',
    'https://pikapizza.wordpress.com/wp-content/uploads/2013/03/hamburguesa-sencilla.png',
    'https://ranchera.com.co/wp-content/uploads/2022/12/HAMBURGUESA-MEXICANA-banner-1.png',
    'https://i.pinimg.com/564x/5e/6c/5f/5e6c5fb35b693b502fca9824ddb16bfd.jpg',
    'https://cdn7.kiwilimon.com/recetaimagen/13823/6183.jpg',
    'https://i0.wp.com/chiplote.imk3.net/wp-content/uploads/2021/02/porcion-de-papas.jpeg?fit=1600%2C1066&ssl=1'
  ]

  nombres:Array<string> = ['Hamburguesa con Doble Carne',
  'Hamburguesa sencilla',
  'Hamburguesa Mexicana',
  'Hamburguesa hawaiana',
  'Hamburguesa de pollo',
  'porción de papas'
]

precios:Array<string> = ['18000',
'14000',
'20000',
'22000',
'20000',
'12000'
]

actu : number=0
aimagen:string=''
anombre:string=''
aprecio:string=''

actualizar(i:number){
  this.actu=i
  this.aimagen=this.imagenes[i]
  this.anombre=this.nombres[i]
  this.aprecio=this.precios[i]
}

carrito(){
  let count = (<HTMLInputElement>document.getElementById('quantityinput')).value
  this.updateOrAddProduct(this.actu+'',count,this.aprecio,this.anombre)
}

updateOrAddProduct(id:string, newCount:string, price:string, name:string) {
  // Leer los datos del localStorage
  const storedData = localStorage.getItem('carrito');
  let data;

  // Verificar si hay datos almacenados
  if (storedData) {
    // Convertir el string JSON de vuelta a un objeto
    data = JSON.parse(storedData);
  } else {
    // Si no hay datos, inicializar un nuevo objeto
    data = {
      total: "0",
      product: []
    };
  }

  // Buscar el producto por su id
  let product = data.product.find((item:any) => item.id === id);

  if (product) {
    // Si el producto existe, actualizar la cantidad
    product.count = newCount;
    product.totalpriceproduct = product.price * Number(newCount); // Actualizar el totalpriceproduct
  } else {
    // Si el producto no existe, agregar un nuevo producto
    product = {
      id: id,
      price: price,
      count: newCount,
      name: name,
      totalpriceproduct: Number(price) * Number(newCount)
    };
    data.product.push(product);
  }

  // Actualizar el total
  const total = data.product.reduce((acc:any,item:any) => acc + item.totalpriceproduct, 0);
  data.total = total.toString();

  // Convertir el objeto modificado a un string JSON
  const updatedData = JSON.stringify(data);

  // Guardar el objeto modificado de nuevo en el localStorage
  localStorage.setItem('carrito', updatedData);

  console.log('Product updated or added successfully.');
}



  addLinkElement() {



    const link3: HTMLLinkElement = this.renderer.createElement('link');
    this.renderer.setAttribute(link3, 'rel', 'stylesheet');
    this.renderer.setAttribute(link3, 'href', 'assets/Xato/assets/css/apps/companies.css');
    this.renderer.appendChild(this.document.head, link3);

  }
}
