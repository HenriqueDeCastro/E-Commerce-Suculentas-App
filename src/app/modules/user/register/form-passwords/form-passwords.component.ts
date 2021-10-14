import { ComparePasswordsService } from './../../../../core/services/compare-passwords/compare-passwords.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TextButton } from 'src/app/shared/enums/text-button';

@Component({
  selector: 'app-form-passwords',
  templateUrl: './form-passwords.component.html',
  styleUrls: ['./form-passwords.component.scss']
})
export class FormPasswordsComponent implements OnInit {

  @Output() returnForm = new EventEmitter<FormGroup>();
  @Output() passwordsForm!: FormGroup;
  @Input() textBtn!: string;
  @Input() disableBtn!: boolean;
  public txtPrevious: string = TextButton.previous;

  constructor(
    private fb: FormBuilder,
    private comparePasswordsService: ComparePasswordsService
  ) { }

  ngOnInit(): void {
    this.validation();
  }

  validation(): void {
    this.passwordsForm = this.fb.group({
      terms_politics: [false, Validators.requiredTrue],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmedPassword: ['', Validators.required]
      }, { validator: this.comparePasswordsService.compare })
    });
  }

  return(): void {
    this.returnForm.emit(this.passwordsForm);
  }
}
