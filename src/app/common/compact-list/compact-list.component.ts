import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compact-list',
  templateUrl: './compact-list.component.html',
  styleUrls: ['./compact-list.component.scss'],
})
export class CompactListComponent {
  @Input() articles;
}
