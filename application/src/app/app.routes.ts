import { Routes } from '@angular/router';
import { AutocompleteComponent } from './pages/autocomplete/autocomplete.component';

export const routes: Routes = [
    {
        path: 'autocomplete',
        component: AutocompleteComponent
    },
    {
        path: '**',
        redirectTo: 'autocomplete'
    }
];
