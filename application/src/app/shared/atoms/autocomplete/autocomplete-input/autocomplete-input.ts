import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged, Observable, of, switchMap } from 'rxjs';
import { AutocompleteService } from '../../../../core/services/autocomplete';
import { CommonModule } from '@angular/common';
import { IAutocomplete } from '../../../../core/models/IAutocomplete.model';

@Component({
  selector: 'app-autocomplete-input',
  imports: [FontAwesomeModule, ReactiveFormsModule, CommonModule],
  templateUrl: './autocomplete-input.html',
  styleUrl: './autocomplete-input.scss'
})
export class AutocompleteInput {
  @Output() slugItem = new EventEmitter<string>();

  faMagnifyingGlass = faMagnifyingGlass;

  searchControl = new FormControl('');
  results$!: Observable<IAutocomplete[]>;

  menuOpen: boolean = false;
  
  constructor(private autocompleteService: AutocompleteService) {
      this.results$ = this.searchControl.valueChanges.pipe(
        debounceTime(300), // espera o usuário parar de digitar
        distinctUntilChanged(), // só dispara se for valor diferente
        switchMap(term => this.autocompleteService.search(term ?? '')) // cancela requisições antigas
      );

      this.results$.subscribe(results => {
        this.menuOpen = results.length > 0;
      });
  }

  onClick(item: IAutocomplete) {
    this.slugItem.emit(item.slug);
    this.menuOpen = false
    this.searchControl.setValue(item.label, { emitEvent: false }); 
  }

}
