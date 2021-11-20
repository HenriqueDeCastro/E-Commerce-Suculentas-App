import { StatusSale } from './../../enums/status-sale';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISale } from '../../models/isale';
import { environment } from 'src/environments/environment';

const URL_PAGSEGURO = environment.urlPagSeguro;

@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.component.html',
  styleUrls: ['./sale-details.component.scss']
})
export class SaleDetailsComponent implements OnInit {

  @Input() company: boolean = false;
  public sale!: ISale;
  public status = StatusSale;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if(this.activatedRoute.snapshot.data['sale']) {
        this.sale = this.activatedRoute.snapshot.data['sale'];
      } else {
        this.router.navigate(['/not-found'])
      }
    })
  }

  checkoutPagSeguro(): void {
    window.location.href = URL_PAGSEGURO + this.sale.transactionCode;
  }
}
