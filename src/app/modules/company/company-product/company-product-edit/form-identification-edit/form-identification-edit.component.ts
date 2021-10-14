import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageCompressService } from 'src/app/core/services/image-compress/image-compress.service';
import { ICategory } from 'src/app/shared/models/icategory';
import { IProductType } from 'src/app/shared/models/iproduct-type';

@Component({
  selector: 'app-form-identification-edit',
  templateUrl: './form-identification-edit.component.html',
  styleUrls: ['./form-identification-edit.component.scss']
})
export class FormIdentificationEditComponent implements OnInit {

  @Input() categorys!: ICategory[];
  @Input() productTypes!: IProductType[];
  @Input() identificationForm!: FormGroup;
  @Output() returnForm = new EventEmitter<FormGroup>();
  @Output() fileReturn = new EventEmitter<File>();
  @Output() fileMiniReturn = new EventEmitter<File>();
  constructor(
    private fb: FormBuilder,
    private imageCompressService: ImageCompressService
  ) { }

  ngOnInit(): void {}


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
