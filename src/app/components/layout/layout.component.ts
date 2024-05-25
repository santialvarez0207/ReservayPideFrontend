import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  log:boolean=false
  name:string=''
  ngOnInit() {
    if(localStorage.getItem('name')!=undefined){
      this.name=localStorage.getItem('name')||''
      this.log=true
    }
  }

}
