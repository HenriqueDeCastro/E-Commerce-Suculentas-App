import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TextButton } from 'src/app/shared/enums/text-button';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.scss']
})
export class FormResidenceComponent implements OnInit {

  @Output() returnForm = new EventEmitter<FormGroup>();
  @Input() residenceForm!: FormGroup;
  @Input() txtBtn!: string;
  @Input() disableBtn!: boolean;
  public txtPrevious: string = TextButton.previous;

  constructor() { }

  ngOnInit(): void {
  }

  return(): void {
    this.returnForm.emit(this.residenceForm);
  }
}
