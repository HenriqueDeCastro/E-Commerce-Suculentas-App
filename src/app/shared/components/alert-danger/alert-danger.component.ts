import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-danger',
  templateUrl: './alert-danger.component.html',
  styleUrls: ['./alert-danger.component.scss']
})
export class AlertDangerComponent implements OnInit {

  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
