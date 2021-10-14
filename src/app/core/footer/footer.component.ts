import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public urlWhats: string = 'https://api.whatsapp.com/send/?phone=WhatsAppNumber5511974513646&text=&app_absent=1';

  public urlFace: string = 'https://www.facebook.com/groups/2486651298029953';

  public urlInsta: string = 'https://www.instagram.com/suculentas_da_ro/';

  constructor() { }

  ngOnInit(): void {
  }

  returnCurrentYear(): number {
    const dNow = new Date();
    const localdate = dNow.getFullYear();
    return localdate;
  }
}
