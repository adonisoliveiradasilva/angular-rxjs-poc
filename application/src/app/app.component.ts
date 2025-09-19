import { Component, inject } from '@angular/core';
import { SideBarComponent } from './shared/organisms/side-bar/side-bar.component';
import { Router, RouterOutlet } from '@angular/router';
import { DisplayTitle } from './shared/atoms/app-display/display-title/display-title';
import { navBarItems } from './core/data/side-bar-items';
import { ILink } from './core/models/ILink.model';

@Component({
    selector: 'app-root',
    imports: [SideBarComponent, RouterOutlet, DisplayTitle],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular RXJS';
  
  private _router = inject(Router)

  get getRouteLabel(): string{
    return navBarItems.find((item: ILink) => {
      return this._router.url.includes(item.slug)
    })?.label ?? ''
  }


}
