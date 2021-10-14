import { switchMap } from 'rxjs/operators';
import { CitysService } from './../../../../core/services/citys/citys.service';
import { ICity } from './../../../../shared/models/icity';
import { IState } from './../../../../shared/models/istate';
import { StatesService } from './../../../../core/services/states/states.service';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { TextButton } from 'src/app/shared/enums/text-button';

@Component({
  selector: 'app-form-location',
  templateUrl: './form-location.component.html',
  styleUrls: ['./form-location.component.scss']
})
export class FormLocationComponent implements OnInit {

  @Output() returnForm = new EventEmitter<FormGroup>();
  @Input() localizationForm!: FormGroup;
  public states$!: Observable<IState[]>;
  public statesFilter!: IState[];
  public citys$!: Observable<ICity[]>;
  public citysFilter!: ICity[];
  public txtNext: string = TextButton.next;

  constructor(
    private statesService: StatesService,
    private citysService: CitysService
  ) { }

  ngOnInit(): void {
    this.states$ = this.statesService.returnStates();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if(changes.localizationForm && this.localizationForm.get('city')?.value) {
      this.citys$ = this.statesService.getByUf(this.localizationForm.get('state')?.value).pipe(
        switchMap((state: IState) => this.citysService.getCitysByStateId(state.id))
      )
    }
  }

  selectState(id: number) {
    this.localizationForm.controls["state"].disable();
    this.localizationForm.controls["city"].disable();
    this.localizationForm.controls["district"].disable();

    this.citys$ = this.citysService.getCitysByStateId(id);

    this.localizationForm.controls["state"].enable();
    this.localizationForm.controls["city"].reset();
    this.localizationForm.controls["city"].enable();
    this.localizationForm.controls["district"].reset();
    this.localizationForm.controls["district"].enable();
  }

  return(): void {
    this.returnForm.emit(this.localizationForm);
  }
}
