import { TestBed } from '@angular/core/testing';

import { BlockService } from './block-service.service';

describe('BlockService', () => {
  let service: BlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockService);
  });
});
