import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInfoSubtitle } from './display-info-subtitle';

describe('DisplayInfoSubtitle', () => {
  let component: DisplayInfoSubtitle;
  let fixture: ComponentFixture<DisplayInfoSubtitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayInfoSubtitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayInfoSubtitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
