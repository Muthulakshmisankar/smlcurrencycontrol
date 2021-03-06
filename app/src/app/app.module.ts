import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { SmlNgCurrencyControlModule } from 'projects/sml-ng-currency-control/src/public-api';
// import { SmlNgCurrencyControlModule } from 'currency-control';
import {SmlNgCurrencyControlModule} from 'sml-ng-currency-control';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SmlNgCurrencyControlModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
