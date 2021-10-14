import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { delay } from 'rxjs/internal/operators/delay';
import { LoadingService } from '../services/loading/loading.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  public loading: boolean = false;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.listenToLoading();
  }

  listenToLoading(): void {
    this.loadingService.loadingSub
      .pipe(delay(0))
      .subscribe((loading: boolean) => {
        this.loading = loading;
      });
  }
}
