import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OnInit } from '@angular/core';

import {UserService} from '../../services/user.service'
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [UserService]
})
export class RegisterComponent {
  constructor( private userService:UserService ,private renderer: Renderer2, @Inject(DOCUMENT) private document: Document ) {
  }
  ngOnInit() {
    this.userService.getUsers().subscribe(res=>{
      console.log(res)
    })
    this.addLinkElement();
    /*this.loadScript('assets/xato/plugins/apex/apexcharts.min.js');
    this.loadScript('assets/xato/plugins/flatpickr/flatpickr.js');
    this.loadScript('assets/js/dashboard.js');*/
  }


  registrar(){
    let email = (<HTMLInputElement>document.getElementById('email')).value
    let pas1 = (<HTMLInputElement>document.getElementById('password1')).value
    let pas2 = (<HTMLInputElement>document.getElementById('password2')).value
    let name = (<HTMLInputElement>document.getElementById('password2')).value
    if(pas1!=pas2){
      alert('Las contraseñas no coiciden')
    }else{
      if(email.length>0&&pas1.length>0&&pas2.length>0&&name.length>0){
        this.userService.postUser(new User('',name,'',email,pas1,'user','','')).subscribe(res=>{
          console.log(res)
        })
      }else{
        alert('Hay parametros vacios')
      }

    }

  }

  addLinkElement() {
    const link: HTMLLinkElement = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'href', 'assets/Xato/plugins/owl-carousel/owl.carousel.min.css');
    this.renderer.appendChild(this.document.head, link);

    const link2: HTMLLinkElement = this.renderer.createElement('link');
    this.renderer.setAttribute(link2, 'rel', 'stylesheet');
    this.renderer.setAttribute(link2, 'href', 'assets/Xato/plugins/owl-carousel/owl.theme.default.min.css');
    this.renderer.appendChild(this.document.head, link2);

    const link3: HTMLLinkElement = this.renderer.createElement('link');
    this.renderer.setAttribute(link3, 'rel', 'stylesheet');
    this.renderer.setAttribute(link3, 'href', 'assets/Xato/assets/css/authentication/auth_1.css');
    this.renderer.appendChild(this.document.head, link3);

  }
}
