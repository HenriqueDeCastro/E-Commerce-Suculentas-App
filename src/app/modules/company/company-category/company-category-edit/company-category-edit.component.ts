import { CategoryService } from './../../../../core/services/category/category.service';
import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { TextButton } from 'src/app/shared/enums/text-button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/shared/models/icategory';

@Component({
  selector: 'app-company-category-edit',
  templateUrl: './company-category-edit.component.html',
  styleUrls: ['./company-category-edit.component.scss']
})
export class CompanyCategoryEditComponent implements OnInit {

  public category!: ICategory;
  public categoryForm!: FormGroup;
  public options: boolean[] = [true, false];
  public txt: string = TextButton.finish;
  public disable: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.category = this.activatedRoute.snapshot.data['category'];
    })
    this.validation();
  }

  validation(): void {
    this.categoryForm = this.fb.group({
      name: [{value: this.category.name, disabled: false}, [Validators.required]],
      description: [{value: this.category.description, disabled: false}, [Validators.required]],
      active: [this.category.active, [Validators.required]]
    });
  }

  edit(): void {
    if(this.categoryForm.valid) {

      this.disable = true;
      this.txt = TextButton.registering;

      const category: ICategory = this.categoryForm.getRawValue() as ICategory;
      category.id = this.category.id;

      this.categoryService.put(category).subscribe(() => {
        this.router.navigate(['/company/category/home'])
        this.snackbar.openSuccess(MessagesSnackbar.successfully_edited);
      },
      error => {
        this.disable = false;
        this.txt = TextButton.finish;
        this.snackbar.openError(MessagesSnackbar.server_error);
      });
    } else {
      this.snackbar.openError(MessagesSnackbar.fill_fields)
    }
  }
}
