import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { BasicFormComponent } from './basic-form/basic-form.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [BasicFormComponent],
  imports: [
    SharedModule,
    FormRoutingModule
  ]
})
export class FormModule { }
