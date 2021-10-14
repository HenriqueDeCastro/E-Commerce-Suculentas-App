import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-warning',
  templateUrl: './alert-warning.component.html',
  styleUrls: ['./alert-warning.component.scss']
})
export class AlertWarningComponent implements OnInit {

  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
