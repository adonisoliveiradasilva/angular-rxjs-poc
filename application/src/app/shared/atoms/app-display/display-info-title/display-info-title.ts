import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-info-title',
  imports: [],
  templateUrl: './display-info-title.html',
  styleUrl: './display-info-title.scss'
})
export class DisplayInfoTitle {
  @Input() title: string = ''

}
