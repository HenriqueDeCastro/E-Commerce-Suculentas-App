import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  urlWhatsapp: string;
  urlFacebook: string;
  urlInstagram: string;

  constructor() { }

  ngOnInit(): void {
    this.urlWhatsapp = environment.UrlWhats;
    this.urlFacebook = environment.UrlFace;
    this.urlInstagram = environment.UrlInsta;
  }

}
