import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { userLogin } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService:LoginService,private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
  }
  ngOnInit() {
    this.addLinkElement();
    /*this.loadScript('assets/xato/plugins/apex/apexcharts.min.js');
    this.loadScript('assets/xato/plugins/flatpickr/flatpickr.js');
    this.loadScript('assets/js/dashboard.js');*/
  }

  login(){
    let email = (<HTMLInputElement>document.getElementById('email')).value
    let pas = (<HTMLInputElement>document.getElementById('password')).value
    var data={
      email: email,
      password: pas,
    }
    this.loginService.auth(data).subscribe(res=>{
      localStorage.setItem('id', res.id);
      localStorage.setItem('name', res.name);
      localStorage.setItem('rol', res.rol);
    },er=>{
      alert(er)
    })
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
