import { TestBed } from '@angular/core/testing';

import { BasedatosserviceService } from './basedatosservice.service';

describe('BasedatosserviceService', () => {
  let service: BasedatosserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasedatosserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
