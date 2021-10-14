import { ActivatedRoute } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TypesOrderby } from 'src/app/shared/enums/types-orderby';

@Component({
  selector: 'app-list-orderby',
  templateUrl: './list-orderby.component.html',
  styleUrls: ['./list-orderby.component.scss']
})
export class ListOrderbyComponent implements OnInit {

  @Output() typeOrder = new EventEmitter<string>();
  @Input() company: boolean = false;
  public types = TypesOrderby;
  public orderByQueryString!: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.orderByQueryString = params.orderBy
    });
  }

  close(value: string): void{
    if(this.orderByQueryString != value) {
      this.typeOrder.emit(value);
    } else {
      this.typeOrder.emit(undefined);
    }
  }

}
