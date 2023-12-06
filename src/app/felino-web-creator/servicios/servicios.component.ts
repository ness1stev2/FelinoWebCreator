import { Component } from '@angular/core';

@Component({
  selector: 'component-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {

  backInLeftElements: Element[] = [];
  backInRightElements: Element[] = [];

  ngOnInit() {
    this.backInLeftElements = Array.from(document.querySelectorAll('.backInLeft-element'));
    this.backInRightElements = Array.from(document.querySelectorAll('.backInRight-element'));
  }



}
