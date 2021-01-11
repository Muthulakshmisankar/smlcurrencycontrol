import { TestBed } from '@angular/core/testing';

import { SmlNgCurrencyControlService } from './sml-ng-currency-control.service';

describe('SmlNgCurrencyControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmlNgCurrencyControlService = TestBed.get(SmlNgCurrencyControlService);
    expect(service).toBeTruthy();
  });
});
