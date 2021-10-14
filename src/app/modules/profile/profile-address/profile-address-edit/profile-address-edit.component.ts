import { MessagesSnackbar } from './../../../../shared/enums/messages-snackbar';
import { IAddress } from './../../../../shared/models/iaddress';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TextButton } from 'src/app/shared/enums/text-button';
import { MatStepper } from '@angular/material/stepper';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { AddressService } from 'src/app/core/services/address/address.service';

@Component({
  selector: 'app-profile-address-edit',
  templateUrl: './profile-address-edit.component.html',
  styleUrls: ['./profile-address-edit.component.scss']
})
export class ProfileAddressEditComponent implements OnInit {

  public address!: IAddress;
  public localizationForm!: FormGroup;
  public residenceForm!: FormGroup;
  public txtFinish: string = TextButton.finish;
  public disableFinish: boolean = false;
  @ViewChild('stepper') private myStepper!: MatStepper;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private addressService: AddressService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.address = this.activatedRoute.snapshot.data['address'];
    })
    this.initializeForms();
  }

  initializeForms(): void {
    this.localizationForm = this.fb.group({
      description: [this.address.description],
      state: [this.address.state, [Validators.required]],
      city: [this.address.city, [Validators.required]],
      district: [this.address.district, [Validators.required]]
    });

    this.residenceForm = this.fb.group({
      road: [this.address.road, [Validators.required]],
      number: [this.address.number, [Validators.required]],
      complement: [this.address.complement],
      cep: [this.address.cep, [Validators.required, Validators.minLength(8)]]
    });
  }

  localizationFormValue(form: FormGroup): void {
    this.localizationForm = form;
    this.nextStep();
  }

  residenceFormValue(form: FormGroup): void {
    this.residenceForm = form;
    this.update();
  }

  nextStep(): void {
    this.myStepper.next();
  }

  update(): void {
    if (this.localizationForm.valid && this.residenceForm.valid) {
      this.disableFinish = true;
      this.txtFinish = TextButton.registering;

      const address: IAddress = {
        id: this.address.id,
        description: this.localizationForm.get('description')?.value,
        city: this.localizationForm.get('city')?.value,
        state: this.localizationForm.get('state')?.value,
        road: this.residenceForm.get('road')?.value,
        number: this.residenceForm.get('number')?.value,
        complement: this.residenceForm.get('complement')?.value,
        cep: this.residenceForm.get('cep')?.value,
        district: this.localizationForm.get('district')?.value,
        userId: this.address.userId
      }

      this.addressService.put(address).subscribe((addresss: IAddress) => {

        this.snackbar.openSuccess(MessagesSnackbar.successfully_edited);
        this.router.navigate(['profile/address']);
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
