import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileRoutingModule } from './file-routing.module';
import { DemoComponent } from './component/demo/demo.component';


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    FileRoutingModule
  ]
})
export class FileModule { }
