import { DialogOrderbyComponent } from './dialog-orderby/dialog-orderby.component';
import { BottomOrderbyComponent } from './bottom-orderby/bottom-orderby.component';
import { MessagesSnackbar } from './../../enums/messages-snackbar';
import { SnackbarService } from './../../../core/services/snackbar/snackbar.service';
import { ICategoryPagination } from './../../models/icategory-pagination';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { IProductType } from './../../models/iproduct-type';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DeviceService } from './../../../core/services/device/device.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss']
})
export class ProductsCategoryComponent implements OnInit {

  @Input() category!: ICategoryPagination;
  @Input() productTypes!: IProductType[];
  @Input() company: boolean = false;
  public search: string = '';
  public open: boolean = false;
  public mobile!: boolean;
  public orderBy!: string;
  public currentPage: number = 0;
  public lastPage = false;

  constructor(
    private deviceService: DeviceService,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router,
    private snackbar: SnackbarService,
    public dialog: MatDialog,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
    this.mobile = this.deviceService.itsMobile();

    if(this.category)
    this.lastPage = this.category.lastPage;

    this.receiveActivatedRoute();
  }

  receiveActivatedRoute(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) =>{
      this.orderBy = params.orderBy ?? '';
      this.search = params.search ?? '';
    });
  }

  receiveSearch(event: string): void {
    this.search = event;
    this.currentPage = 0;
    this.getProducts();
  }

  defineDevice(): void {
    if(this.mobile) {
      this.openBottomSheet()
    } else {
      this.openDialog();
    }
  }

  openBottomSheet(): void {
    const bottomSheetRef = this.bottomSheet.open(BottomOrderbyComponent, {
      data: {
        company: this.company,
      }
    });
    bottomSheetRef.afterDismissed().subscribe((result) => {
      this.orderByResult(result);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOrderbyComponent, {
      data: {
        company: this.company,
      },
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.orderByResult(result);
    });
  }

  orderByResult(result: any) {
    if(result) {
      this.orderBy = result;
      this.currentPage = 0;
      this.getProducts();
    }
  }

  viewMore(): void {
    this.currentPage++;
    this.getProducts();
  }

  getProducts(): void {

    let products$: Observable<ICategoryPagination>

    if(this.company) {
      products$ = this.categoryService.getByCompany(this.category.category.id ?? 0, this.currentPage, this.orderBy, this.search)
    } else {
      products$ = this.categoryService.getByClient(this.category.category.id ?? 0, this.currentPage, this.orderBy, this.search)
    }

    products$.subscribe((categoriaPagination: ICategoryPagination) => {

      let orderByQueryString!:string;
      let searchQueryString!: string;
      this.activatedRoute.queryParams.subscribe(params => orderByQueryString = params.orderBy ?? '');
      this.activatedRoute.queryParams.subscribe(params => searchQueryString = params.search ?? '');

      if(this.orderBy != orderByQueryString || this.search != searchQueryString) {
        this.category = categoriaPagination;
        this.currentPage = 0;
        this.changePage();
      }
      else {
        this.category.products.concat(categoriaPagination.products);
        this.category.products = [ ...this.category.products, ...categoriaPagination.products];
      }

      this.lastPage = categoriaPagination.lastPage;
    },
    erro => {

      this.snackbar.openError(MessagesSnackbar.server_error);
    });
  }

  changePage() {
    this.router.navigate([], { queryParams: { orderBy: this.orderBy, search: this.search } });
  }
}
