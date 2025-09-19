import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInfoTitle } from './display-info-title';

describe('DisplayInfoTitle', () => {
  let component: DisplayInfoTitle;
  let fixture: ComponentFixture<DisplayInfoTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayInfoTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayInfoTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
