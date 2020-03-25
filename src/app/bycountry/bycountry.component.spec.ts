import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BycountryComponent } from './bycountry.component';

describe('BycountryComponent', () => {
  let component: BycountryComponent;
  let fixture: ComponentFixture<BycountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BycountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BycountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
