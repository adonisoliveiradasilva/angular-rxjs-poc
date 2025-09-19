import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-title',
  imports: [],
  templateUrl: './display-title.html',
  styleUrl: './display-title.scss'
})
export class DisplayTitle {
  @Input() label: string = ''

  
}
