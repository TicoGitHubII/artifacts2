import { TestBed } from '@angular/core/testing';

import { ServicesUsersService } from './services-users.service';

describe('ServicesUsersService', () => {
  let service: ServicesUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
