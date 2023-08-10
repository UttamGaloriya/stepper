import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { FileModule } from './module/file/file.module';



@NgModule({
  imports: [
    AppModule,
    ServerModule,
    FileModule,

  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
