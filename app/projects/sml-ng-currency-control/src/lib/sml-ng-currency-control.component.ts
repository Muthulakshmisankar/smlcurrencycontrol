import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SmlNgCurrencyControlService } from './sml-ng-currency-control.service';

@Component({
  selector: 'sml-ng-currency-control',
  template: `
  <div class="col-12 col-md-12">
    <form [formGroup]="amountForm">
        <input type="text" class="form-control" id="amount" formControlName="amount" 
        (keydown)="maskAmount($event);" (keypress)="smlNgCurrencyValidationService.allowOnlyNumber($event)"
        (paste)="smlNgCurrencyValidationService.allowOnlyNumber($event)">
        <div class="form-feedback"
            *ngIf="amountFormControl?.amount?.invalid && (amountFormControl?.amount.dirty || amountFormControl?.amount?.touched)">
            <p class=" v-error" *ngIf="amountFormControl?.amount?.errors?.required">
                Required </p>
                <p class="v-error"
                *ngIf="!amountFormControl?.amount?.errors?.required && amountFormControl?.amount?.errors?.MinMax">
                {{amountFormControl?.amount?.errors?.MinMax?.valid}}</p>    
        </div>
    </form>
</div>
  `,
  styles: []
})
export class SmlNgCurrencyControlComponent implements OnInit {
  @Input('options') Options: any = {
    minLength: '2',
    maxLength: '18',
    customMessage: 'Length should between 2 and 18'
  }
  constructor(private fb: FormBuilder, public smlNgCurrencyValidationService: SmlNgCurrencyControlService) { }
  amountForm: FormGroup;
  get amountFormControl(): any {
    return this.amountForm.controls;
  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.amountForm = this.fb.group({
      amount: ['0.00', [Validators.required, this.smlNgCurrencyValidationService.MinMax(this.Options)]]
    })
  }
  resetForm() {
    this.amountForm.reset({
      amount: '0.00'
    });
  }
  maskAmount(e) {
    if (e.keyCode == 190 || e.keyCode == 110) {
      e.preventDefault();
    }
    if (e.which == 8) {
      let b = ".";
      let input = e.target.value ? e.target.value.split('.').join('') : null;
      if (input.length) {
        var position = input.length - 3;
        var output = [input.slice(0, position), b, input.slice(position)].join('');
        this.amountFormControl.amount.setValue(output);
        if (input.length == 3) {
          this.amountFormControl.amount.setValue('0' + output)
        }
      }
      return;
    }
    else if (e.keyCode === 46) {
      if (typeof e.target.selectionStart == "number") {
        if (e.target.selectionStart == 0 && e.target.selectionEnd == e.target.value.length && e.target.value.length > 1) {
          this.amountFormControl.amount.setValue();
          return;
        }
        let b = ".";
        let input = this.amountFormControl.amount.value ? this.amountFormControl.amount.value.split('.').join('') : null;
        if (input.length) {
          var position = input.length - 2;
          let output: any = [input.slice(0, position), b, input.slice(position)].join('');
          if (output.length == 3) {
            this.amountFormControl.amount.setValue('0' + output);
          } else {
            this.amountFormControl.amount.setValue(output);
          }
        }
      }
    }

    if (e.key >= 0 && e.key <= 9) {
      const pattern = /[0-9]/;
      let input = this.amountFormControl.amount.value ? this.amountFormControl.amount.value.split('.').join('') : null;
      console.log(e.target.value);
      if (pattern.test(input)) {
        if (typeof e.target.selectionStart == "number") {
          if (e.target.selectionStart == 0 && e.target.selectionEnd == e.target.value.length) {
            this.amountFormControl.amount.setValue();
            return;
          }
        }
        let b = ".";
        if (input.length) {
          var position = input.length - 1;
          let output: any = [input.slice(0, position), b, input.slice(position)].join('');
          if (this.amountFormControl.amount.value.length === 1) {
            this.amountFormControl.amount.setValue('0.0 ' + output)
          } else if (output[0] == 0 && output[1] == 0) {
            output = output.slice(2);
            this.amountFormControl.amount.setValue('0' + output);
          } else if (output.length === 4 && output[0] == 0) {
            output = output.slice(1);
            this.amountFormControl.amount.setValue(output);
          } else {
            this.amountFormControl.amount.setValue(output);
          }
        }
      }
    }

  }
}
