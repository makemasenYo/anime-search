import { Component, OnInit, Input } from '@angular/core';
import AnimeDate from '../models/anime-date.model';

@Component({
  selector: '[as-anime-detail-date]',
  templateUrl: './anime-detail-date.component.html',
  styleUrls: ['./anime-detail-date.component.css']
})
export class AnimeDetailDateComponent implements OnInit {
  @Input() date: AnimeDate;
  @Input() currentYear: number;

  constructor() { }

  ngOnInit() { }
}
