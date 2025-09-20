// search.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { IAutocomplete } from '../models/IAutocomplete.model';
import { autocompleteArray } from '../data/autocomplete.data';

@Injectable({ providedIn: 'root' })
export class AutocompleteService {
  private items: IAutocomplete[] = autocompleteArray;

  search(term: string): Observable<IAutocomplete[]> {
    if (!term.trim()) {
      return of([]);
    }

    return of(this.items).pipe(
      delay(500), // simula latência de rede
      map(items =>
        items.filter(item =>
          item.label.toLowerCase().includes(term.toLowerCase())
        )
      )
    );
  }
}
