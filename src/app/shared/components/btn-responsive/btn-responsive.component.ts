import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DeviceService } from 'src/app/core/services/device/device.service';

@Component({
  selector: 'app-btn-responsive',
  templateUrl: './btn-responsive.component.html',
  styleUrls: ['./btn-responsive.component.scss']
})
export class BtnResponsiveComponent implements OnInit {

  @Input() txt!: string;
  @Input() disable: boolean = false;
  @Input() color: string = 'primary';
  public mobile!: boolean;

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.mobile = this.deviceService.itsMobile();
  }
}
