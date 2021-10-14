import { ICity } from './../../../../shared/models/icity';
import { Router } from '@angular/router';
import { IAddress } from './../../../../shared/models/iaddress';
import { IUser } from 'src/app/shared/models/iuser';
import { switchMap, take } from 'rxjs/operators';
import { AddressService } from './../../../../core/services/address/address.service';
import { UserService } from './../../../../core/services/user/user.service';
import { MessagesSnackbar } from './../../../../shared/enums/messages-snackbar';
import { SnackbarService } from './../../../../core/services/snackbar/snackbar.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { TextButton } from 'src/app/shared/enums/text-button';

@Component({
  selector: 'app-profile-address-add',
  templateUrl: './profile-address-add.component.html',
  styleUrls: ['./profile-address-add.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class ProfileAddressAddComponent implements OnInit {

  public localizationForm!: FormGroup;
  public residenceForm!: FormGroup;
  public txtFinish: string = TextButton.finish;
  public disableFinish: boolean = false;
  @ViewChild('stepper') private myStepper!: MatStepper;

  constructor(
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private userService: UserService,
    private addressService: AddressService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForms();
  }

  initializeForms(): void {
    this.localizationForm = this.fb.group({
      description: [''],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      district: ['', [Validators.required]]
    });

    this.residenceForm = this.fb.group({
      road: ['', [Validators.required]],
      number: ['', [Validators.required]],
      complement: [''],
      cep: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  localizationFormValue(form: FormGroup): void {
    this.localizationForm = form;
    this.nextStep();
  }

  residenceFormValue(form: FormGroup): void {
    this.residenceForm = form;
    this.register();
  }

  nextStep(): void {
    this.myStepper.next();
  }

  register(): void {
    if (this.localizationForm.valid && this.residenceForm.valid) {

      this.disableFinish = true;
      this.txtFinish = TextButton.registering;

      this.userService.returnUser().pipe(
        take(1),
        switchMap((user: IUser) => {

          const address: IAddress = {
            description: this.localizationForm.get('description')?.value,
            city: this.localizationForm.get('city')?.value,
            state: this.localizationForm.get('state')?.value,
            road: this.residenceForm.get('road')?.value,
            number: this.residenceForm.get('number')?.value,
            complement: this.residenceForm.get('complement')?.value,
            cep: this.residenceForm.get('cep')?.value,
            district: this.localizationForm.get('district')?.value,
            userId: user.id!
          }

          return this.addressService.post(address);
        })
      ).subscribe((address: IAddress) => {
        this.snackbar.openSuccess(MessagesSnackbar.successful_registration);
        this.router.navigate(['profile/address/home']);
      },
      erro => {
        this.disableFinish = false;
        this.txtFinish = TextButton.finish;

        this.snackbar.openError(MessagesSnackbar.server_error);
      });
    } else {
      this.snackbar.openError(MessagesSnackbar.fill_fields);
    }
  }
}
