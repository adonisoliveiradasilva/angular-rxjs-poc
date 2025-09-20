import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteInput } from '../../shared/atoms/autocomplete/autocomplete-input/autocomplete-input';
import { autocompleteArray } from '../../core/data/autocomplete.data';
@Component({
    selector: 'app-autocomplete',
    imports: [CommonModule, AutocompleteInput],
    templateUrl: './autocomplete.component.html',
    styleUrl: './autocomplete.component.scss'
})
export class AutocompleteComponent {
    private _description: string = '';

    handleSlug(slug: string) {
        this._description = autocompleteArray.find(item => { return item.slug == slug} )?.description ?? ''
    }

    get getDescription(): string{
        return this._description
    }
}
