import { UserService } from './../../../../core/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/models/iuser';

@Component({
  selector: 'app-profile-user-home',
  templateUrl: './profile-user-home.component.html',
  styleUrls: ['./profile-user-home.component.scss']
})
export class ProfileUserHomeComponent implements OnInit {

  public user!: IUser;
  public userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.receiveUser();
  }

  receiveUser(): void{
    this.userService.returnUser().subscribe((user: IUser) => {
      this.userForm = this.fb.group({
        name: [{value: user.fullName, disabled: true}],
        cpf: [{value: user.cpf, disabled: true}],
        data: [{value: user.birthDate, disabled: true}],
        phone: [{value: user.phoneNumber, disabled: true}],
        email: [{value: user.email, disabled: true}],
      });
    });
  }

  navigateEdit(): void {
    this.router.navigate(['/profile/user/edit']);
  }
}
