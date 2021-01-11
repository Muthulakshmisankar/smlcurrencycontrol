import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmlNgCurrencyControlComponent } from './sml-ng-currency-control.component';

describe('SmlNgCurrencyControlComponent', () => {
  let component: SmlNgCurrencyControlComponent;
  let fixture: ComponentFixture<SmlNgCurrencyControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmlNgCurrencyControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmlNgCurrencyControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
