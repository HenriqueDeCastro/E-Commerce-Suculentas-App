import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from 'src/app/core/services/shared/ProgressBar/ProgressBar.service';

@Component({
  selector: 'app-progressbar-toolbar',
  templateUrl: './progressbar-toolbar.component.html',
  styleUrls: ['./progressbar-toolbar.component.scss']
})
export class ProgressbarToolbarComponent implements OnInit {

  constructor(public progressBarService: ProgressBarService) { }

  ngOnInit() {
  }

}
