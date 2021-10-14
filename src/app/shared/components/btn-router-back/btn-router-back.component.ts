import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-router-back',
  templateUrl: './btn-router-back.component.html',
  styleUrls: ['./btn-router-back.component.scss']
})
export class BtnRouterBackComponent implements OnInit {

  @Input() url!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
