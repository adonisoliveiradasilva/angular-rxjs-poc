import { Component, inject, Input } from '@angular/core';
import { ILink } from '../../../../core/models/ILink.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuOpen } from '../../../../core/states/menu-open';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-item',
    imports: [FontAwesomeModule, CommonModule],
    templateUrl: './item.component.html',
    styleUrl: './item.component.scss'
})
export class ItemComponent {
    @Input() item!: ILink; 
    menuOpenService = inject(MenuOpen)
    menuOpenState$ = this.menuOpenService.menuOpenState$;
    
    private _router = inject(Router)

    get getSameCurrentRouter(): boolean{
        return this._router.url == `/${this.item.slug}`;
    }
}
