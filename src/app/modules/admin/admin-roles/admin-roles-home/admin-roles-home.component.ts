import { IRole } from '../../../../shared/models/irole';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-roles-home',
  templateUrl: './admin-roles-home.component.html',
  styleUrls: ['./admin-roles-home.component.scss']
})
export class AdminRolesHomeComponent implements OnInit {

  public roles!: IRole[];
  public mobile!: boolean;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.roles = this.activatedRoute.snapshot.data['roles'];
    })
  }

}
