/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserListService } from './user-list.service';

describe('Service: UserListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserListService]
    });
  });

  it('should ...', inject([UserListService], (service: UserListService) => {
    expect(service).toBeTruthy();
  }));
});
