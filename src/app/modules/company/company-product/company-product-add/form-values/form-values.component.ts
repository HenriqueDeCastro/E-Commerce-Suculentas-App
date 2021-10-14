import { IProductType } from './../../../../../shared/models/iproduct-type';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductTypes } from 'src/app/shared/enums/product-types';

@Component({
  selector: 'app-form-values',
  templateUrl: './form-values.component.html',
  styleUrls: ['./form-values.component.scss']
})
export class FormValuesComponent implements OnInit {

  @Output() returnForm = new EventEmitter<FormGroup>();
  @Input() productType!: IProductType;
  @Input() txtBtn!: string;
  @Input() disableBtn!: boolean;
  public valuesForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.validation();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if(changes.productType)
    this.validation();
  }

  validation(): void {
    this.valuesForm = this.fb.group({
      price: ['', [Validators.required]],
      inventory: [{value:'', disabled: this.productType.name == ProductTypes.order}, [Validators.required]],
      maximumQuantity: [{value:'', disabled: this.productType.name == ProductTypes.inventory}, [Validators.required]]
    });
  }

  return() {
    this.returnForm.emit(this.valuesForm);
  }
}
