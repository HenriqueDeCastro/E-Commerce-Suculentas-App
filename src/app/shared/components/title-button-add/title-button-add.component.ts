import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-button-add',
  templateUrl: './title-button-add.component.html',
  styleUrls: ['./title-button-add.component.scss']
})
export class TitleButtonAddComponent implements OnInit {

  @Input() title!: string;
  @Input() route!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
