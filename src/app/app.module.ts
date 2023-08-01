import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StepperFormComponent } from './component/form/stepper-form/stepper-form.component';
import { ListComponent } from './component/list/list.component';
import { SharedInputComponent } from './component/shared-input/shared-input.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperFormComponent,
    ListComponent,
    SharedInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
