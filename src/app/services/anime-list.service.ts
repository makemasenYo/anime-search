import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import Page from "../models/page.model";
import { AnimeSortOptions } from '../models/anime-sort-options.model';
import Query from '../models/query.model';

const pageQuery = gql`
  query($sort: [MediaSort], $season: MediaSeason, $year: Int, $status: MediaStatus, $page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        currentPage
        lastPage
      }
      media(type: ANIME, season: $season, seasonYear: $year, isAdult: false, status: $status, sort: $sort, search: $search) {
        id
        title {
          romaji
          english
        }
        format
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
          large
          medium
        }
        genres
        trailer {
          id
          site
        }
        siteUrl
      }
    }
  }`;

@Injectable({
  providedIn: 'root'
})
export class AnimeListService {
  constructor(private apollo: Apollo) { }

  private get(query: Query): Observable<ApolloQueryResult<Object>> {
    return this.apollo.watchQuery(query).valueChanges;
  }

  page(options: AnimeSortOptions): Observable<Page> {
    let variables = ( options.season ) ? {
      sort: options.sort,
      season: options.season,
      year: options.year,
      status: options.status,

      page: options.page,
      perPage: options.perPage
    } : {
      sort: options.sort,
      year: options.year,
      status: options.status,

      page: options.page,
      perPage: options.perPage
    }
    ;

    return this.get({
      query: pageQuery,
      variables: variables
    }).pipe(
      map((res: Object) => res["data"]["Page"]),
      map((page: Page) => page)
    );
  }

  search(search: string): Observable<Page> {
    return this.get({
      query: pageQuery,
      variables: {
        search: search,

        page: 1,
        perPage: 5
      }
    }).pipe(
      map((res: Object) => res["data"]["Page"]),
      map((page: Page) => page)
    );
  }
}