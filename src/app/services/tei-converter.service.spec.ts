import { TestBed } from '@angular/core/testing';

import { TeiConverterService } from './tei-converter.service';

describe('TeiConverterService', () => {
  let service: TeiConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeiConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
