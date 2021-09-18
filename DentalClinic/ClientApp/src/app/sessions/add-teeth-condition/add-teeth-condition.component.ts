import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-teeth-condition',
  templateUrl: './add-teeth-condition.component.html',
  styleUrls: ['./add-teeth-condition.component.css'],
})
export class AddTeethConditionComponent implements OnInit {
  x: string = '';
  showFiller = false;
  checked = false;
  indeterminate = false;
  constructor() {}

  ngOnInit(): void {}
}
