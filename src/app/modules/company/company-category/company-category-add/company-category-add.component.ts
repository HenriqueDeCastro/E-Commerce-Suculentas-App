import { CategoryService } from './../../../../core/services/category/category.service';
import { ICategory } from 'src/app/shared/models/icategory';
import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { TextButton } from 'src/app/shared/enums/text-button';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-category-add',
  templateUrl: './company-category-add.component.html',
  styleUrls: ['./company-category-add.component.scss']
})
export class CompanyCategoryAddComponent implements OnInit {

  public categoryForm!: FormGroup;
  public disableBtn: boolean = false;
  public txtBtn: string = TextButton.finish;

  constructor(
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.validation();
  }

  validation() {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  register(): void {
    if(this.categoryForm.valid) {

      this.disableBtn = true;
      this.txtBtn = TextButton.registering;

      const category: ICategory = {
        name: this.categoryForm.get('name')?.value ?? '',
        description: this.categoryForm.get('description')?.value,
        active: true
      };

      this.categoryService.post(category).subscribe((category: ICategory) => {
        this.snackbar.openSuccess(MessagesSnackbar.successful_registration);
        this.router.navigate(['/company/category'])
      },
      (error) => {
        this.disableBtn = false;
        this.txtBtn = TextButton.add;
        this.snackbar.openError(MessagesSnackbar.server_error);
      });
    }
    else {
      this.snackbar.openError(MessagesSnackbar.server_error);
    }
  }
}
