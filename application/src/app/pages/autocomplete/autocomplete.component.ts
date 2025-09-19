import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AutocompleteService } from '../../core/services/autocomplete';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-autocomplete',
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './autocomplete.component.html',
    styleUrl: './autocomplete.component.scss'
})
export class AutocompleteComponent {
    searchControl = new FormControl('');
    results$!: Observable<string[]>;

    constructor(private autocomplete: AutocompleteService) {
        this.results$ = this.searchControl.valueChanges.pipe(
        debounceTime(300), // espera o usuário parar de digitar
        distinctUntilChanged(), // só dispara se for valor diferente
        switchMap(term => this.autocomplete.search(term ?? '')) // cancela requisições antigas
        );
    }
}
