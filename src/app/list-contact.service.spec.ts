import { TestBed, inject } from '@angular/core/testing';

import { ListContactService } from './list-contact.service';

describe('ListContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListContactService]
    });
  });

  it('should be created', inject([ListContactService], (service: ListContactService) => {
    expect(service).toBeTruthy();
  }));
});
