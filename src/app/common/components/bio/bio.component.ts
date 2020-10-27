import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output() uploadPicture = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  emitUploadPicture() {
    this.uploadPicture.emit();
  }

}
