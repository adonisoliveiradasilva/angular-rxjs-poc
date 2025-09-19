import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInfo } from './display-info';

describe('DisplayInfo', () => {
  let component: DisplayInfo;
  let fixture: ComponentFixture<DisplayInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
