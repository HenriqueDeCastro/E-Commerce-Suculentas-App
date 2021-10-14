import { TimeService } from './../../../../core/services/time/time.service';
import { ProductTypes } from './../../../../shared/enums/product-types';
import { switchMap } from 'rxjs/operators';
import { RenameFileService } from './../../../../core/services/rename-file/rename-file.service';
import { ProductService } from './../../../../core/services/product/product.service';
import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { TextButton } from 'src/app/shared/enums/text-button';
import { IProductType } from './../../../../shared/models/iproduct-type';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/shared/models/icategory';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/shared/models/iproduct';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-product-add',
  templateUrl: './company-product-add.component.html',
  styleUrls: ['./company-product-add.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class CompanyProductAddComponent implements OnInit {

  public identificationForm!: FormGroup;
  public informationForm!: FormGroup;
  public valuesForm!: FormGroup;
  public categorys!: ICategory[];
  public productTypes!: IProductType[];
  public file!: File;
  public fileMini!: File;
  public txtBtn: string = TextButton.add;
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
    })

    this.initializeForms();
  }

  initializeForms(): void {
    this.identificationForm = this.fb.group({
      image: ['', [Validators.required]],
      category: [null, [Validators.required]],
      productType: [null, [Validators.required]]
    });

    this.informationForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });

    this.valuesForm = this.fb.group({
      price: ['', [Validators.required]],
      inventory: ['', [Validators.required]],
      maximumQuantity: ['', [Validators.required]]
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
    this.register();
  }

  register() {
    if(this.identificationForm.valid && this.informationForm.valid && this.valuesForm.valid) {

      this.txtBtn = TextButton.registering;
      this.disableBtn = true;

      const data = this.timeService.returnsCurrentDateForName();
      const nameFile = `${this.informationForm.get('name')?.value}_${data}`;

      this.file = this.renameFileService.rename(this.file, nameFile);
      this.fileMini = this.renameFileService.rename(this.fileMini, nameFile);

      this.productService.postUpload(this.file, false).pipe(
        switchMap(() => {
          return this.productService.postUpload(this.fileMini, true);
        })
      ).pipe(
        switchMap(() => {

          const productTypeSelected: IProductType = this.identificationForm.get('productType')?.value as IProductType;
          const product: IProduct  = {
            name: this.informationForm.get('name')?.value,
            description: this.informationForm.get('description')?.value,
            price: Number(this.valuesForm.get('price')?.value),
            image: this.file.name,
            productTypeId: productTypeSelected.id ?? 1,
            inventory: productTypeSelected.name == ProductTypes.inventory? this.valuesForm.get('inventory')?.value : null,
            maximumQuantity: productTypeSelected.name == ProductTypes.order? this.valuesForm.get('maximumQuantity')?.value : null,
            active: true,
            categoryId: this.identificationForm.get('category')?.value
          };

          return this.productService.post(product);
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
    else {
      this.snackbar.openError(MessagesSnackbar.fill_fields);
    }
  }


}
