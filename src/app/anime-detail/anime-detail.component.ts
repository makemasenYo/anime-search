import { Component, OnInit, Input } from '@angular/core';

import Anime from '../models/anime.model';

@Component({
  selector: '[as-anime-detail]',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {
  @Input() anime: Anime;
  @Input() currentYear: number;
  @Input() status: string;

  constructor() { }

  ngOnInit() { }
}
