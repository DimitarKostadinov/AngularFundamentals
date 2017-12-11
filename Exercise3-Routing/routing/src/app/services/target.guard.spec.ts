import { TestBed, async, inject } from '@angular/core/testing';

import { TargetGuard } from './target.guard';

describe('TargetGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TargetGuard]
    });
  });

  it('should ...', inject([TargetGuard], (guard: TargetGuard) => {
    expect(guard).toBeTruthy();
  }));
});
