import { Component } from '@angular/core';
import { SideBarComponent } from './shared/organisms/side-bar/side-bar.component';

@Component({
    selector: 'app-root',
    imports: [SideBarComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular RXJS';

}
