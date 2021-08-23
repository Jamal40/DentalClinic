import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() filterRequested: EventEmitter<string> = new EventEmitter<string>();

  searchText: string = '';

  constructor() {}

  ngOnInit(): void {}

  requestFilter() {
    this.filterRequested.emit(this.searchText);
  }

  inputChanged(searchText: string) {
    this.searchText = searchText;
  }
  clear() {
    this.searchText = '';
  }
}
