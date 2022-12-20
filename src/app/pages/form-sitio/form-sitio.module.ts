import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormSitioPageRoutingModule } from './form-sitio-routing.module';

import { FormSitioPage } from './form-sitio.page';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormSitioPageRoutingModule
  ],
  declarations: [FormSitioPage, FormComponent]
})
export class FormSitioPageModule {}
