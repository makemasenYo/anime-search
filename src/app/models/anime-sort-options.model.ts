export const sortList: string[] = [ 
    'POPULARITY', 'POPULARITY_DESC',
    'TITLE_ROMAJI', 'TITLE_ROMAJI_DESC',
    'TITLE_ENGLISH', 'TITLE_ENGLISH_DESC',
    'START_DATE', 'START_DATE_DESC',
    'END_DATE', 'END_DATE_DESC',
    'EPISODES', 'EPISODES_DESC',
    'DURATION', 'DURATION_DESC'
  ];
export const seasonList: string[] = ['ALL', 'WINTER', 'SPRING', 'SUMMER', 'FALL'];
export const statusList: string[] = ['FINISHED', 'RELEASING', 'NOT_YET_RELEASED', 'CANCELLED'];
export const perPageList: number[] = [10, 20, 30, 40, 50];

export class AnimeSortOptions {
    sort: string;
    season: string;
    year: number;
    status: string;

    page: number;
    perPage: number;

    constructor() {
        this.sort = 'POPULARITY_DESC';
        this.season = null;
        this.year = (new Date()).getFullYear();
        this.status = 'RELEASING';
              
        this.page = 1;
        this.perPage = perPageList[0];
    }
}