import {Component, Directive,Attribute,forwardRef} from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';


@Directive({ 
    selector: '[validateEqual]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: EqualValidator, multi: true }
    ]
})
export class EqualValidator implements Validator {
    constructor(@Attribute('validateEqual') public validateEqual: string,
        @Attribute('reverse') public reverse: string) {
     }

    private get isReverse() {
        if (!this.reverse) return false;
        return this.reverse === 'true';
    }
    
     validate(control: AbstractControl): { [key: string]: any } {
         debugger;
        let selfValue = control.value;

        // control vlaue
        let e = control.root.get(this.validateEqual);

        // value not equal
        if (e && selfValue !== e.value && !this.isReverse) {
          return {
            validateEqual: false
          }
        }

        // value equal and reverse
        if (e && selfValue === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) e.setErrors(null);
        }

        // value not equal and reverse
        if (e && selfValue !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            })
        }

        return null;
    }
}