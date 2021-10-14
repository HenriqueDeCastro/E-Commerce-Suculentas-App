import { RenameFileService } from './../../../../core/services/rename-file/rename-file.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product/product.service';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { TimeService } from 'src/app/core/services/time/time.service';
import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';
import { ProductTypes } from 'src/app/shared/enums/product-types';
import { TextButton } from 'src/app/shared/enums/text-button';
import { ICategory } from 'src/app/shared/models/icategory';
import { IProduct } from 'src/app/shared/models/iproduct';
import { IProductType } from 'src/app/shared/models/iproduct-type';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-product-edit',
  templateUrl: './company-product-edit.component.html',
  styleUrls: ['./company-product-edit.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class CompanyProductEditComponent implements OnInit {

  public identificationForm!: FormGroup;
  public informationForm!: FormGroup;
  public valuesForm!: FormGroup;
  public categorys!: ICategory[];
  public productTypes!: IProductType[];
  public product!: IProduct;
  public file!: File;
  public fileMini!: File;
  public txtBtn: string = TextButton.finish;
  public disableBtn: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private productService: ProductService,
    private timeService: TimeService,
    private renameFileService: RenameFileService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.categorys = this.activatedRoute.snapshot.data['categorys'];
      this.productTypes = this.activatedRoute.snapshot.data['productsType'];
      this.product = this.activatedRoute.snapshot.data['product'];
    })

    this.initializeForms();
  }

  initializeForms(): void {
    this.identificationForm = this.fb.group({
      image: [this.product.image, [Validators.required]],
      category: [this.product.categoryId, [Validators.required]],
      productType: [this.productTypes.filter(p => p.id == this.product.productTypeId)[0], [Validators.required]]
    });

    this.informationForm = this.fb.group({
      name: [this.product.name, [Validators.required]],
      description: [this.product.description, [Validators.required]],
    });

    this.valuesForm = this.fb.group({
      price: [this.product.price, [Validators.required]],
      inventory: [this.product.inventory, [Validators.required]],
      maximumQuantity: [this.product.maximumQuantity, [Validators.required]]
    });
  }

  fileValue(file: File): void {
    this.file = file;
  }

  fileMiniValue(fileMini: File): void {
    this.fileMini = fileMini;
  }

  identificationFormValue(form: FormGroup): void {
    this.identificationForm = form;
  }

  informationFormValue(form: FormGroup): void {
    this.informationForm = form;
  }

  valuesFormValue(form: FormGroup): void {
    this.valuesForm = form;
    this.update();
  }

  update() {
    if(this.identificationForm.valid && this.informationForm.valid && this.valuesForm.valid) {

      this.txtBtn = TextButton.registering;
      this.disableBtn = true;

      if(this.file ||this.fileMini) {

        const data = this.timeService.returnsCurrentDateForName();
        const nameFile = `${this.informationForm.get('name')?.value}_${data}`;
        this.file = this.renameFileService.rename(this.file, nameFile);
        this.fileMini = this.renameFileService.rename(this.fileMini, nameFile);
        this.withUpload();

      } else {
        this.withoutUpload();
      }
    }
    else {
      this.snackbar.openError(MessagesSnackbar.fill_fields);
    }
  }

  withUpload() {
    this.productService.postUpload(this.file, false).pipe(
      switchMap(() => {
        return this.productService.postUpload(this.fileMini, true);
      })
    ).pipe(
      switchMap(() => {

        const productTypeSelected: IProductType = this.identificationForm.get('productType')?.value as IProductType;
        const product: IProduct  = this.createdProduct();
        return this.productService.put(product);
      })
    ).subscribe(() => {
      this.snackbar.openSuccess(MessagesSnackbar.successful_registration);
      this.location.back();
    },
    error => {
      this.txtBtn = TextButton.add;
      this.disableBtn = false;
      this.snackbar.openError(MessagesSnackbar.server_error);
    });
  }

  withoutUpload() {
    const product: IProduct  = this.createdProduct();
    this.productService.put(product).subscribe(() => {
      this.snackbar.openSuccess(MessagesSnackbar.successful_registration);
      this.location.back();
    },
    error => {
      this.txtBtn = TextButton.add;
      this.disableBtn = false;
      this.snackbar.openError(MessagesSnackbar.server_error);
    });
  }

  createdProduct(): IProduct {
    const productTypeSelected: IProductType = this.identificationForm.get('productType')?.value as IProductType;
    return {
      id: this.product.id!,
      name: this.informationForm.get('name')?.value,
      description: this.informationForm.get('description')?.value,
      price: Number(this.valuesForm.get('price')?.value),
      image: this.file? this.file.name : this.product.image,
      productTypeId: productTypeSelected.id ?? 1,
      inventory: productTypeSelected.name == ProductTypes.inventory? this.valuesForm.get('inventory')?.value : null,
      maximumQuantity: productTypeSelected.name == ProductTypes.order? this.valuesForm.get('maximumQuantity')?.value : null,
      active: this.valuesForm.get('active')?.value,
      categoryId: this.identificationForm.get('category')?.value
    };
  }
}
