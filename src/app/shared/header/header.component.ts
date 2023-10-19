import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  reachedScrollPosition: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.scrollY > 25) {
      this.reachedScrollPosition = true;
    } else {
      this.reachedScrollPosition = false;
    }
    const scrollY = window.scrollY;
    console.log('Posición del scroll vertical:', scrollY);
  }


}
