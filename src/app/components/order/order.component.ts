import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
  }
  ngOnInit() {
    this.addLinkElement();
    /*this.loadScript('assets/xato/plugins/apex/apexcharts.min.js');
    this.loadScript('assets/xato/plugins/flatpickr/flatpickr.js');
    this.loadScript('assets/js/dashboard.js');*/
  }

  addLinkElement() {

    const link3: HTMLLinkElement = this.renderer.createElement('link');
    this.renderer.setAttribute(link3, 'rel', 'stylesheet');
    this.renderer.setAttribute(link3, 'href', 'assets/Xato/assets/css/apps/ecommerce.css');
    this.renderer.appendChild(this.document.head, link3);

  }
}
