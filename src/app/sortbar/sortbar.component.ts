import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AnimeSortOptions, sortList, seasonList, statusList, perPageList } from '../models/anime-sort-options.model';

@Component({
  selector: 'as-sortbar',
  templateUrl: './sortbar.component.html',
  styleUrls: ['./sortbar.component.css']
})
export class SortbarComponent implements OnInit {
  sortSelect: Array<string>;
  seasonSelect: Array<string>;
  statusSelect: Array<string>;
  perPageSelect: Array<number>;
  
  sortOptions: AnimeSortOptions;
  @Output() currentSortOptions = new EventEmitter<AnimeSortOptions>();

  navbarCollapsed: boolean;

  constructor() { }

  ngOnInit() { 
    this.sortSelect = sortList.map(sort => sort.replace(new RegExp(/_/, 'g'), ' '));
    this.seasonSelect = seasonList;
    this.statusSelect = statusList.map(sort => sort.replace(new RegExp(/_/, 'g'), ' '));
    this.perPageSelect = perPageList;
    
    this.sortOptions = new AnimeSortOptions();
 
    this.currentSortOptions.emit(this.sortOptions);

    this.navbarCollapsed = true;
  }

  isSortDown(sort: string): boolean { return sort.endsWith('DESC') ? true : false; }

  isSortSelected(sort: string) { return this.sortOptions.sort === sort.replace(new RegExp(/ /, 'g'), '_') ? true : false; }

  isStatusSelected(status: string) { return this.sortOptions.status === status.replace(new RegExp(/ /, 'g'), '_') ? true : false; }

  getYears(): Array<number> {
    const thisYear = (new Date()).getFullYear();
    const years: Array<number> = [thisYear+1];

    for(let i: number = thisYear; i >= 1990; i--)
      years.push(i);

    return years;
  }

  updateSort(sort: string): void {
    this.sortOptions.sort = sort.replace(new RegExp(/ /, 'g'), '_');
    this.currentSortOptions.emit(this.sortOptions);
  }

  updateSeason(season: string): void { 
    this.sortOptions.season = (season === 'ALL') ? null : season;
    this.currentSortOptions.emit(this.sortOptions);
  }

  updateStatus(status: string): void { 
    this.sortOptions.status = status.replace(new RegExp(/ /, 'g'), '_');
    this.currentSortOptions.emit(this.sortOptions); 
  }

  updateYear(year: number): void { 
    this.sortOptions.year = year;
    this.currentSortOptions.emit(this.sortOptions); 
  }

  updatePerPage(perPage: number): void { 
    this.sortOptions.perPage = perPage;
    this.currentSortOptions.emit(this.sortOptions); 
  }

  toggleNavbar(): void { this.navbarCollapsed = (this.navbarCollapsed) ? false : true; }
}