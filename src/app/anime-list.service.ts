import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import Page from "./models/page.model";
import { AnimeSortOptions } from './models/anime-sort-options.model';

const pageQuery = gql`
  query($sort: [MediaSort], $season: MediaSeason, $year: Int, $status: MediaStatus, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        currentPage
        lastPage
      }
      media(type: ANIME, season: $season, seasonYear: $year, isAdult: false, status: $status, sort: $sort) {
        id
        title {
          romaji
          english
        }
        status
        startDate {
          year 
          month
          day
        }
        endDate {
          year
          month
          day
        }
        episodes
        nextAiringEpisode {
          episode
        }
        duration
        coverImage {
          medium
        }
        genres
        siteUrl
      }
    }
  }`;

@Injectable({
  providedIn: 'root'
})
export class AnimeListService {
  constructor(private apollo: Apollo) { }

  private get(options: AnimeSortOptions): Observable<ApolloQueryResult<Object>> { 
    return this.apollo.watchQuery({
      query: pageQuery,
      variables: {
        sort: options.sort,
        season: options.season,
        year: options.year,
        status: options.status,

        page: options.page,
        perPage: options.perPage
      }
    }).valueChanges;
  }

  page(options: AnimeSortOptions): Observable<Page> {
    return this.get(options).pipe(
      map((res: Object) => res["data"]["Page"]),
      map((page: Page) => page)
    );
  }
}