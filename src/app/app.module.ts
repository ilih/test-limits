import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LineComponent } from './line/line.component';
import { LimitComponent } from './limit/limit.component';
import { CursorComponent } from './cursor/cursor.component';
import { LimitsService } from './limits.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LineComponent,
    LimitComponent,
    CursorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    LimitsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
