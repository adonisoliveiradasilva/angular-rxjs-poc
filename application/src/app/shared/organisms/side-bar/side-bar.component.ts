import { Component, inject } from '@angular/core';
import { navBarItems } from '../../../core/data/side-bar-items';
import { ILink } from '../../../core/models/ILink.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemComponent } from '../../atoms/side-bar/item/item.component';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MenuOpen } from '../../../core/states/menu-open';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-side-bar',
    imports: [FontAwesomeModule, ItemComponent, CommonModule],
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  private _router = inject(Router)
  menuOpenService = inject(MenuOpen)
  menuOpenState$ = this.menuOpenService.menuOpenState$;

  private _navBarItems: ILink[] = navBarItems
  menuIcon = faBars;

  get getNavBarItems(): ILink[] {
    return this._navBarItems
  }

  toggleMenuOpen(){
    this.menuOpenService.toggle()
  }

  navigate(slug: string){
    this._router.navigate([slug])
  }
}
