import { TestBed } from '@angular/core/testing';

import { ConsumoServicesService } from './consumo-services.service';

describe('ConsumoServicesService', () => {
  let service: ConsumoServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
