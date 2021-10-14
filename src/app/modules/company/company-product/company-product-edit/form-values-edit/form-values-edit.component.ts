import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductTypes } from 'src/app/shared/enums/product-types';
import { IProductType } from 'src/app/shared/models/iproduct-type';

@Component({
  selector: 'app-form-values-edit',
  templateUrl: './form-values-edit.component.html',
  styleUrls: ['./form-values-edit.component.scss']
})
export class FormValuesEditComponent implements OnInit {

  @Output() returnForm = new EventEmitter<FormGroup>();
  @Input() productType!: IProductType;
  @Input() txtBtn!: string;
  @Input() disableBtn!: boolean;
  @Input() price!: number;
  @Input() inventory!: number;
  @Input() maximumQuantity!: number;
  @Input() active!: boolean;
  public valuesForm!: FormGroup;
  public options: boolean[] = [true, false];

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
      price: [this.price, [Validators.required]],
      inventory: [{value:this.inventory, disabled: this.productType.name == ProductTypes.order}, [Validators.required]],
      maximumQuantity: [{value:this.maximumQuantity, disabled: this.productType.name == ProductTypes.inventory}, [Validators.required]],
      active: [this.active, [Validators.required]]
    });
  }

  return() {
    this.returnForm.emit(this.valuesForm);
  }
}
