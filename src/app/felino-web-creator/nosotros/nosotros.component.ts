import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'nosotros-component',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent /* implements AfterViewInit */{
  /* @ViewChild('elementoToObserve') elementoToObserve!: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.reachedScrollPosition[2] = true;
        }
      });
    });
    observer.observe(this.elementoToObserve.nativeElement);
  }
 */

  reachedScrollPosition: boolean[] = [false, false, false];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.reachedScrollPosition[0] = window.scrollY > 90;
    this.reachedScrollPosition[1] = window.scrollY > 360;
  }

}
