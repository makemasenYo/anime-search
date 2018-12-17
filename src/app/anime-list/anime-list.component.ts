import { Component, OnInit } from '@angular/core';

import { AnimeListService } from '../services/anime-list.service';
import Page from '../models/page.model';
import { AnimeSortOptions } from '../models/anime-sort-options.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'as-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {
  currentPage$: Observable<Page>;
  currentSortOptions: AnimeSortOptions;

  constructor(private animeListService: AnimeListService) { }

  ngOnInit() { this.currentSortOptions = new AnimeSortOptions(); }

  updatePage(options?: AnimeSortOptions): void {
    if(options) {
      this.currentSortOptions = options;
      this.currentSortOptions.page = 1;
    }

    this.currentPage$ = this.animeListService.page(this.currentSortOptions);
  }

  turnPage(nextPage: number): void {
    this.currentSortOptions.page = nextPage;
    this.updatePage();
  }
}
