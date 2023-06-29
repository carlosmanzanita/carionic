import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag:any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = 'codelab-google-analytics';
  constructor(
    private router: Router
  ) 
  {
  // const navEndEvents$ =this.router.events
  //       .pipe(
  //         filter((event): event is NavigationEnd => event instanceof NavigationEnd)
  //       )
  //       navEndEvents$.subscribe((event:NavigationEnd) => {
  //         gtag('config','G-L37S9CMP1T'{
  //           'page_path': event.urlAfterRedirects
  //         });
  //       });
  }
}
