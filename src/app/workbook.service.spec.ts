import { TestBed } from '@angular/core/testing';

import { WorkbookService } from './workbook.service';

describe('WorkbookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkbookService = TestBed.get(WorkbookService);
    expect(service).toBeTruthy();
  });
});
