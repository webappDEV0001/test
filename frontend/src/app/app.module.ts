import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppStoreModule } from './store/store.module';

import { CounterService } from './store/services'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppStoreModule,
    BrowserModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
