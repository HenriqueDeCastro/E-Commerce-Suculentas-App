import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-divide-dotted',
  templateUrl: './divide-dotted.component.html',
  styleUrls: ['./divide-dotted.component.scss']
})
export class DivideDottedComponent implements OnInit {

  @Input() categoryName!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
