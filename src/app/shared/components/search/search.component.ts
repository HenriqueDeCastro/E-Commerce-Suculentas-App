import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() OnTyping = new EventEmitter<string>();
  @Output() page = new EventEmitter<number>();
  @Input() value!: string;
  public debounce: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(500))
      .subscribe(filter => {
        this.OnTyping.emit(filter);
        this.page.emit(1);
      });
  }

  returnSearch(event: KeyboardEvent) {
    this.debounce.next((<HTMLInputElement>event.target).value)
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
