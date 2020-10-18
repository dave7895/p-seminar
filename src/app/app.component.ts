import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {slideAnimation} from 'src/app/animations/pageTransitions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    slideAnimation
  ]
})
export class AppComponent {
  title = 'Lateinische Textausgabe';

  prepareRoute(outlet: RouterOutlet): any{
    console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData.level);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.level;
  }
}
