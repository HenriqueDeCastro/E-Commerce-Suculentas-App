import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-window-close',
  templateUrl: './btn-window-close.component.html',
  styleUrls: ['./btn-window-close.component.scss']
})
export class BtnWindowCloseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  close() {
    window.close()
  }
}
