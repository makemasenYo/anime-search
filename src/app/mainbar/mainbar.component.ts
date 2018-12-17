import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import Page from '../models/page.model';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { AnimeListService } from '../services/anime-list.service';

@Component({
  selector: 'as-mainbar',
  templateUrl: './mainbar.component.html',
  styleUrls: ['./mainbar.component.css']
})
export class MainbarComponent implements OnInit {
  searchPage$: Observable<Page>;
  private searchTerms = new Subject<string>();

  constructor(private animeListService: AnimeListService) { }

  search(term: string): void { this.searchTerms.next(term); }

  ngOnInit(): void {
    this.searchPage$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.animeListService.search(term))
    );
  }

  isSearching(): boolean { return (this.searchTerms) ? true : false; }
}
