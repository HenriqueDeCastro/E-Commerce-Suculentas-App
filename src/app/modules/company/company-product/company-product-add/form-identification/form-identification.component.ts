import { IProductType } from './../../../../../shared/models/iproduct-type';
import { ICategory } from 'src/app/shared/models/icategory';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ImageCompressService } from 'src/app/core/services/image-compress/image-compress.service';

@Component({
  selector: 'app-form-identification',
  templateUrl: './form-identification.component.html',
  styleUrls: ['./form-identification.component.scss']
})
export class FormIdentificationComponent implements OnInit {

  @Input() categorys!: ICategory[];
  @Input() productTypes!: IProductType[];
  @Output() returnForm = new EventEmitter<FormGroup>();
  @Output() fileReturn = new EventEmitter<File>();
  @Output() fileMiniReturn = new EventEmitter<File>();

  public identificationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private imageCompressService: ImageCompressService
  ) { }

  ngOnInit(): void {
    this.validation();
  }

  validation(): void {
    this.identificationForm = this.fb.group({
      image: ['', [Validators.required]],
      category: [null, [Validators.required]],
      productType: [null, [Validators.required]]
    });
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const fileName = file['name'];
      var reader = new FileReader();

      reader.onload = async (event: any) => {
        const file = await this.imageCompressService.compressFile50(event.target.result, fileName);
        this.fileReturn.emit(file);
        const fileMini = await this.imageCompressService.compressFile25(event.target.result, fileName);
        this.fileMiniReturn.emit(fileMini);
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  return() {
    this.returnForm.emit(this.identificationForm);
  }
}
