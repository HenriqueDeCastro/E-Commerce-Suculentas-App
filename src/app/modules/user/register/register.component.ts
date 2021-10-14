import { IUserToken } from './../../../shared/models/iuser-token';
import { IUser } from './../../../shared/models/iuser';
import { AuthService } from './../../../core/services/auth/auth.service';
import { SnackbarService } from './../../../core/services/snackbar/snackbar.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ComparePasswordsService } from 'src/app/core/services/compare-passwords/compare-passwords.service';
import { Router } from '@angular/router';
import { TextButton } from 'src/app/shared/enums/text-button';
import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class RegisterComponent implements OnInit {

  public dataForm!: FormGroup;
  public contactsForm!: FormGroup;
  public passwordsForm!: FormGroup;
  public txtFinish: string = TextButton.finish;
  public disableFinish: boolean = false;
  @ViewChild('stepper') private myStepper!: MatStepper;

  constructor(
    private fb: FormBuilder,
    private comparePasswordsService: ComparePasswordsService,
    private snackbar: SnackbarService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForms();
  }

  initializeForms(): void {
    this.dataForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(70)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]]
    });

    this.contactsForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.passwordsForm = this.fb.group({
      terms_politics: [null, Validators.requiredTrue],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmedPassword: ['', Validators.required]
      }, { validator: this.comparePasswordsService.compare })
    });
  }

  dataFormValue(form: FormGroup): void {
    this.dataForm = form;
    this.nextStep();
  }

  contactsFormValue(form: FormGroup): void {
    this.contactsForm = form;
    this.nextStep();
  }

  nextStep(): void {
    this.myStepper.next();
  }

  passwordsFormValue(form: FormGroup): void {
    this.passwordsForm = form;
    this.verifyForms();
  }

  verifyForms(): void {
    if(this.dataForm.valid && this.contactsForm.valid && this.passwordsForm.valid) {
      this.register();
    }
    else {
      if(this.dataForm.valid
        && this.contactsForm.valid
        &&this.passwordsForm.get('terms_politics')?.invalid
        && this.passwordsForm.get('passwords')?.valid) {
        this.snackbar.openError(MessagesSnackbar.accept_terms_and_policies, 2000)
      }
      else {
        this.snackbar.openError(MessagesSnackbar.fill_fields, 1000)
      }
    }
  }

  register(): void {
    const user = this.convertFormsInUser();
    this.txtFinish = TextButton.registering;
    this.disableFinish = !this.disableFinish;

    this.authService.register(user).subscribe((user: IUserToken) => {
      this.snackbar.openSuccess(MessagesSnackbar.successful_registration)
      this.router.navigate(['']);
    },
    (error) => {
      this.txtFinish = TextButton.finish;
      this.disableFinish = !this.disableFinish;
      switch (error.status) {
        case 406:
          this.snackbar.openError(MessagesSnackbar.accept_terms_and_policies);
          break;
        case 412:
          this.snackbar.openError(MessagesSnackbar.duplicate_registration);
          break;
        default:
          this.snackbar.openError(MessagesSnackbar.server_error);
          break;
      }
    });
  }

  convertFormsInUser(): IUser {
    const user: IUser = {
      fullName: this.dataForm.get('fullname')?.value,
      cpf: this.dataForm.get('cpf')?.value,
      phoneNumber: this.contactsForm.get('phoneNumber')?.value,
      email: this.contactsForm.get('email')?.value,
      acceptTerms: this.passwordsForm.get('terms_politics')?.value,
      password: this.passwordsForm.get('passwords.password')?.value,
      confirmedPassword: this.passwordsForm.get('passwords.confirmedPassword')?.value
    }

    return user;
  }
}
