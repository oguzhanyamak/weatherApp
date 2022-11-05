import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './Component/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { TimezonePipe } from './Pipe/timezone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    TimezonePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
