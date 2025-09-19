// search.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AutocompleteService {
  private items = [
    'Angular',
    'React',
    'Vue',
    'Svelte',
    'Next.js',
    'NestJS',
    'RxJS',
    'TypeScript',
    'JavaScript',
  ];

  search(term: string): Observable<string[]> {
    if (!term.trim()) {
      return of([]);
    }

    return of(this.items).pipe(
      delay(500), // simula latência de rede
      map(items =>
        items.filter(item =>
          item.toLowerCase().includes(term.toLowerCase())
        )
      )
    );
  }
}
