import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SmlNgCurrencyControlComponent } from './sml-ng-currency-control.component';
import { CommonModule } from '@angular/common'; 
import { SmlNgCurrencyControlService } from './sml-ng-currency-control.service';
@NgModule({
  declarations: [SmlNgCurrencyControlComponent],
  imports: [
    ReactiveFormsModule, 
    FormsModule,
    CommonModule
  ],
  exports: [SmlNgCurrencyControlComponent],
  providers:[SmlNgCurrencyControlService]
})
export class SmlNgCurrencyControlModule { }
