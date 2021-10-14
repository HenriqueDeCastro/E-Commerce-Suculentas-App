import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-dinamic',
  templateUrl: './list-dinamic.component.html',
  styleUrls: ['./list-dinamic.component.scss']
})
export class ListDinamicComponent implements OnInit {

  @Input() total!: number;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
