import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'nosotros-component',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent {
  reachedScrollPosition: boolean[] = [false, false, false];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.reachedScrollPosition[0] = window.scrollY > 90;
    this.reachedScrollPosition[1] = window.scrollY > 360;
  }

}
