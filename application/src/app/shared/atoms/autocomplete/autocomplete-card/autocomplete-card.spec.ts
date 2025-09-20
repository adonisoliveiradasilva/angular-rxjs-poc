import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteCard } from './autocomplete-card';

describe('AutocompleteCard', () => {
  let component: AutocompleteCard;
  let fixture: ComponentFixture<AutocompleteCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
