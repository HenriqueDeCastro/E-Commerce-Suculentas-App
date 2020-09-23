import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import { MaterialFileInputModule } from 'ngx-material-file-input';

@NgModule({
  exports: [
    MaterialFileInputModule
  ]
})

export class FileInputModule { }
