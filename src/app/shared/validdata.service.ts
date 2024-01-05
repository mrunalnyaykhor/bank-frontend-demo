import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValiddataService {

  constructor() { }
  ifscCodeValidator(control: AbstractControl): ValidationErrors | null {
    const ifscRegex = /^[A-Z]{4}\d{7}$/;
    const valid = ifscRegex.test(control.value);
    return valid ? null : { invalidIfsc: true };
  }
   //validation
 integerValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value === null || control.value === '') {
      return null; 
    }

    const valid = /^\d+$/.test(control.value); 

    return valid ? null : { invalidInteger: true }; 
  };
}

stringOnlyValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const valid = /^[a-zA-Z ]*$/.test(control.value);
    return valid ? null : { invalidString: { value: control.value } };
  };
}
emailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      // If there's no control value, return as valid (use a required validator for mandatory fields)
      return null;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(control.value);
    return isValid ? null : { invalidEmail: { value: control.value } };
  };
}
aadhaarNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;
    }
    const valueAsString = String(control.value);
    const valid = /^\d{12}$/.test(valueAsString);
    return valid ? null : { invalidAadhaarNumber: { value: control.value } };
  };
}
panCardValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;
    }

    const valueAsString = String(control.value).toUpperCase(); 

    const panCardPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/; 

    const valid = panCardPattern.test(valueAsString);

    return valid ? null : { invalidpanCardNumber: { value: control.value } };
  };
}
contactNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const valueAsString = String(control.value);
    const regex = new RegExp("^((\\+91-?)|0)?[0-9]{10}$");
    const valid = regex.test(valueAsString);
 return valid ? null : { pattern: { value: control.value } };
  };
}

dateOfBirthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const valueAsString = String(control.value);
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    const valid = regex.test(valueAsString);
    return valid ? null : { pattern: { value: control.value } };
  };
}



}