import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent implements OnInit {
  @Input() userName: string;
  @Input() followers: string;
  @Input() likes: string;
  @Input() articles: string;

  constructor() { }

  ngOnInit() {}

}
