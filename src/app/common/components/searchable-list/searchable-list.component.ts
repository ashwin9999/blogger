import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchable-list',
  templateUrl: './searchable-list.component.html',
  styleUrls: ['./searchable-list.component.scss'],
})
export class SearchableListComponent implements OnInit {
  @Input() articles;

  onInput($event) {
    const items = Array.from(document.getElementsByClassName('article-list') as HTMLCollectionOf<HTMLElement>);
    const query = $event.target.value.toLowerCase();

    requestAnimationFrame(() => {
      items.forEach((item) => {
        const found = item.textContent.toLowerCase().indexOf(query) > -1;
        
        item.style.display = found ? 'block' : 'none';
      });
    });
  }

  ngOnInit() {}

}
