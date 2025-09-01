import { Component } from '@angular/core';
import { navBarItems } from '../../../core/data/side-bar-items';
import { NgClass, NgFor } from '@angular/common';
import { ILink } from '../../../core/models/ILink.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-side-bar',
    imports: [NgFor, NgClass, FontAwesomeModule],
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  private _navBarItems: ILink[] = navBarItems

  get getNavBarItems(): ILink[] {
    return this._navBarItems
  }
}
