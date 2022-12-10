import { TestBed } from '@angular/core/testing';

import { CrearproveedorserviceService } from './crearproveedorservice.service';

describe('CrearproveedorserviceService', () => {
  let service: CrearproveedorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearproveedorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
