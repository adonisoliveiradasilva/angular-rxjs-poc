import { Component, inject } from '@angular/core';
import { SideBarComponent } from './shared/organisms/side-bar/side-bar.component';
import { Router, RouterOutlet } from '@angular/router';
import { ILink } from './core/models/ILink.model';
import { DisplayInfo } from './shared/molecules/display-info/display-info';
import { DEFAULT_DISPLAY_INFO, IDisplayInfo } from './core/models/IDisplayInfo.model';
import { displayInfoArray } from './core/data/display-info.data';

@Component({
    selector: 'app-root',
    imports: [SideBarComponent, RouterOutlet, DisplayInfo],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular RXJS';
  displayInfo!: IDisplayInfo;
  private _router = inject(Router)

  get getDisplayInfo(): IDisplayInfo{
    return displayInfoArray.find((item: IDisplayInfo) => {
      return this._router.url.includes(item.slug)
    }) ?? DEFAULT_DISPLAY_INFO
  }


}
