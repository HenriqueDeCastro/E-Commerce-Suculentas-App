import { IUserToken } from './../../../../shared/models/iuser-token';
import { first, switchMap, take } from 'rxjs/operators';
import { UserService } from './../../../../core/services/user/user.service';
import { IUser } from '../../../../shared/models/iuser';
import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';
import { TextButton } from 'src/app/shared/enums/text-button';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-profile-user-edit',
  templateUrl: './profile-user-edit.component.html',
  styleUrls: ['./profile-user-edit.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class ProfileUserEditComponent implements OnInit {

  public identificationForm!: FormGroup;
  public contactsForm!: FormGroup;
  public txtBtn: string = TextButton.finish;
  public disableBtn: boolean = false;
  @ViewChild('stepper') private myStepper!: MatStepper;

  constructor(
    private fb: FormBuilder,
    private snackbar: SnackbarService,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForms();
  }

  initializeForms(): void {
    this.identificationForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(70)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]]
    });

    this.contactsForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: [{value: '', disabled: true}, [Validators.required, Validators.email]]
    });
  }

  identificationFormValue(form: FormGroup): void {
    this.identificationForm = form;
    this.nextStep();
  }

  contactsFormValue(form: FormGroup): void {
    this.contactsForm = form;
    this.updateUser();
  }

  nextStep(): void {
    this.myStepper.next();
  }

  updateUser(): void {
    if(this.identificationForm.valid && this.contactsForm.valid) {

      this.disableBtn = true;
      this.txtBtn = TextButton.registering;

      this.userService.returnUser().pipe(
        take(1),
        switchMap((userToken: IUser) => {
          const user: IUser = {
            id: userToken.id,
            fullName: this.identificationForm.get('fullname')?.value,
            cpf: this.identificationForm.get('cpf')?.value,
            phoneNumber: this.contactsForm.get('phoneNumber')?.value,
            email: this.contactsForm.get('email')?.value
          }

          return this.authService.put(user);
        })
      ).subscribe((user: IUserToken) => {

        this.snackbar.openSuccess(MessagesSnackbar.successfully_edited);
        this.router.navigate(['/profile/user']);
      },
      error => {
        this.disableBtn = false;
        this.txtBtn = TextButton.finish;

        switch (error) {
          case 'Usuario não encontrado!':
            this.snackbar.openError(MessagesSnackbar.email_not_found);
            break;
          default:
            this.snackbar.openError(MessagesSnackbar.server_error);
            break;
        }
      });
    }
    else {
      this.snackbar.openError(MessagesSnackbar.fill_fields);
    }
  }
}
