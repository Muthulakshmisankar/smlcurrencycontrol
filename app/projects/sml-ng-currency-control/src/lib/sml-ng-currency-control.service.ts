import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, FormControl } from '@angular/forms';
declare var window: any;
@Injectable()
export class SmlNgCurrencyControlService {

  constructor() { }
  public allowOnlyNumber(e, whichevent = '') {
    if (whichevent === 'paste') {
      this.preventPasteCharacters(/[0-9]/, e);
    } else {
      this.preventCharacters(/[0-9]/, e);
    }
  }
  public preventCharacters(pattern, event) {
    const input = String.fromCharCode(event.charCode);
    if (!pattern.test(input)) {
      event.preventDefault();
    }
  }
  public preventPasteCharacters(pattern, event) {
    const clipData = event.clipboardData || window.clipboardData;
    const input = clipData.getData('text');
    if (!pattern.test(input)) {
      event.preventDefault();
    }
  }
  public MinMax(options): ValidatorFn {
    let minLength = options.minLength;
    let maxLength = options.maxLength;
    let customMessage = options.customMessage;
    return (control: AbstractControl): any => {
     
      if (control.value !== undefined) {
          
          if (control.value.toString().split('.')[0].length < parseInt(minLength) || control.value.toString().split('.')[0].length > parseInt(maxLength)) {
                  return { 'MinMax': { valid: customMessage } };

          }
      
          if (parseInt(control.value) / 1 === 0) {
          if (control.touched) {
            return { 'MinMax': { valid: 'Each Digit having Zero is not allowed' } }
          }
        }
      }
      return null;
    };
  }
}
