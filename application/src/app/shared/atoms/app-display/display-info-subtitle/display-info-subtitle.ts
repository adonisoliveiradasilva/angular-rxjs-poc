import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-info-subtitle',
  imports: [],
  templateUrl: './display-info-subtitle.html',
  styleUrl: './display-info-subtitle.scss'
})
export class DisplayInfoSubtitle {
  @Input() subtitle: string = ''

}
