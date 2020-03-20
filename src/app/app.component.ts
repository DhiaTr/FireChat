import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('scroller', { static: false }) private feedContainer: ElementRef;
  title = 'FireChat';

  // onScroll() {
  //   if (this.feedContainer.nativeElement.scrollTop > 2) {
  //     (document.querySelector('nav-bar') as HTMLElement).style.opacity = '1';
  //     console.log(this.feedContainer.nativeElement.scrollTop);
  //   }
  // }
}
