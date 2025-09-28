import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-autocomplete-card',
  imports: [],
  templateUrl: './autocomplete-card.html',
  styleUrl: './autocomplete-card.scss'
})
export class AutocompleteCard {
  @Input() description!: string;

  teste: any
  teste2: any

  a(){
      const x = 1
      const y = 2
      const z = 3
  }
}
