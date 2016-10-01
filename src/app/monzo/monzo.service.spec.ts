/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MonzoService } from './monzo.service';

describe('Service: Monzo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonzoService]
    });
  });

  it('should ...', inject([MonzoService], (service: MonzoService) => {
    expect(service).toBeTruthy();
  }));
});
