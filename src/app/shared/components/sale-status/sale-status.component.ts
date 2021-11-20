import { MessagesSnackbar } from './../../enums/messages-snackbar';
import { SnackbarService } from './../../../core/services/snackbar/snackbar.service';
import { UserService } from './../../../core/services/user/user.service';
import { ISalePagination } from './../../models/isale-pagination';
import { StatusSale } from './../../enums/status-sale';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISale } from '../../models/isale';
import { SaleService } from 'src/app/core/services/sale/sale.service';
import { switchMap, take } from 'rxjs/operators';
import { IUser } from '../../models/iuser';

@Component({
  selector: 'app-sale-status',
  templateUrl: './sale-status.component.html',
  styleUrls: ['./sale-status.component.scss']
})
export class SaleStatusComponent implements OnInit {

  @Input() company: boolean = false;
  public sales!: ISale[];
  public statusSale = StatusSale;
  public title!: string;
  public lastPage!: boolean;
  public currentPage: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private saleService: SaleService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    if(this.verifystatus(this.activatedRoute.snapshot.params.statusId)) {
      this.activatedRoute.params.subscribe((params) => {
        const salePag: ISalePagination = this.activatedRoute.snapshot.data['sales'];
        this.sales = salePag.sales;
        this.lastPage = salePag.lastPage;
      })
    } else {
      this.router.navigate(['/not-found'])
    }
  }

  verifystatus(statusRoute: number): boolean {
    if(statusRoute == this.statusSale.awaiting_payment){
      this.title = 'Aguardando Pagamento';
      return true;
    }
    else if(statusRoute == this.statusSale.waiting_to_sent)
    {
      this.title = 'Aguardando Envio';
      return true;
    }
    else if(statusRoute == this.statusSale.sent)
    {
      this.title = 'Enviado';
      return true;
    }
    else if(statusRoute == this.statusSale.finished)
    {
      this.title = 'Finalizado';
      return true;
    }
    else if(statusRoute == this.statusSale.canceled)
    {
      this.title = 'Cancelado';
      return true;
    }
    else if(statusRoute == this.statusSale.in_dispute)
    {
      this.title = 'Em Disputa';
      return true;
    }
    else {
      return false;
    }
  }

  saleNavigation(saleId: number): void {
    if(this.company) {
      this.router.navigate(['company/sale/details', saleId])
    } else {
      this.router.navigate(['profile/sale/details', saleId])
    }
  }

  viewMore(): void {
    this.currentPage++;
    this.getSales();
  }


  getSales() {
    if(this.company) {
      this.getByCompany();
    } else {
      this.getByUser();
    }
  }

  getByUser(): void {
    this.userService.returnUser().pipe(
      take(1),
      switchMap((user: IUser) => {
        return this.saleService.getStatusByUser(user.id!, this.activatedRoute.snapshot.params.statusId, this.currentPage)
      })
    ).subscribe((salePag: ISalePagination) => {
      this.sales = this.sales.concat(salePag.sales);
      this.lastPage = salePag.lastPage;
    },
    error => {
      this.snackbar.openError(MessagesSnackbar.server_error);
    });
  }

  getByCompany(): void {
    this.saleService.getByStatus(this.activatedRoute.snapshot.params.statusId, this.currentPage).subscribe((salePag: ISalePagination) => {
      this.sales = this.sales.concat(salePag.sales);
      this.lastPage = salePag.lastPage;
    },
    error => {
      this.snackbar.openError(MessagesSnackbar.server_error);
    });
  }
}
