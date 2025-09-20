import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteInput } from './autocomplete-input';

describe('AutocompleteInput', () => {
  let component: AutocompleteInput;
  let fixture: ComponentFixture<AutocompleteInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
