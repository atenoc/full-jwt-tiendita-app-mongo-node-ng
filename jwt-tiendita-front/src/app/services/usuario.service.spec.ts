import { TestBed } from '@angular/core/testing';

import { ProductosService } from './usuario.service';

describe('ProductosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductosService = TestBed.get(ProductosService);
    expect(service).toBeTruthy();
  });
});
