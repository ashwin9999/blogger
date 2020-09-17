import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-pick',
  templateUrl: './popular-pick.component.html',
  styleUrls: ['./popular-pick.component.scss'],
})
export class PopularPickComponent implements OnInit {
  @Input() genreList: string[];
  @Input() articles: { img: string; title: string; author: string; date: string; link: string; }[];

  constructor() { }

  ngOnInit() {}

}
