import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { reducers } from './reducers';
import { effects } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    HttpClientModule
  ]
})
export class AppStoreModule { }
