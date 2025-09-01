import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './shared/organisms/side-bar/side-bar.component';

@Component({
    selector: 'app-root',
    imports: [CommonModule,
        RouterOutlet,
        SideBarComponent
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular RXJS';

}
