import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

enum conditionName {
  caries = 0,
  fracture,
  wear,
  missing,
}

@Component({
  selector: 'app-tooth-status-input',
  templateUrl: './tooth-status-input.component.html',
  styleUrls: ['./tooth-status-input.component.css'],
})
export class ToothStatusInputComponent implements OnInit {
  @Input() toothNumber;
  @Input() toothId;
  @Output() toothConditionChanged = new EventEmitter<any[]>();
  toothConditions: any[] = [];

  toothStatusForm = new FormGroup({
    caries: new FormControl(''),
    fracture: new FormControl(''),
    wear: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    this.toothStatusForm.valueChanges.subscribe((x) => {
      for (let cond in x) {
        if (x[cond]) {
          this.toothConditions.push({
            toothId: this.toothId,
            name: conditionName[cond],
            degree: x[cond],
          });
        }
      }
      console.log(this.toothConditions);
      this.toothConditionChanged.emit(this.toothConditions);
    });
  }

  showValues() {}
}
