import { UserService } from 'src/app/core/services/user/user.service';
import { Directive, ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[accessControl]'
})
export class AccessControlDirective implements OnInit {

  @Input() rolesPermission!: string[];

  constructor(
    private elementRef: ElementRef,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.display = "none";
    this.checkAccess();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.rolesPermission)
      this.checkAccess();
  }

  checkAccess() {
    this.elementRef.nativeElement.style.display
      = this.userService.verifyAcessRole(this.rolesPermission) ? "block" : "none";
  }
}
