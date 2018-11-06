import { TestBed } from '@angular/core/testing';

import { AnimeListService } from './anime-list.service';

describe('AnimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimeListService = TestBed.get(AnimeListService);
    expect(service).toBeTruthy();
  });
});
