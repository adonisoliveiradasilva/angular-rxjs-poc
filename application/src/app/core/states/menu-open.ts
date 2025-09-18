import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuOpen {
  private _menuOpenState$ = new BehaviorSubject<boolean>(false);
  menuOpenState$ = this._menuOpenState$.asObservable();

  toggle(): void {
    console.log(this._menuOpenState$)
    this._menuOpenState$.next(!this._menuOpenState$?.value);
  }

}
