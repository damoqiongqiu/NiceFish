import { Directive, Input } from "@angular/core";
import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector: "[validateEqual]",
    providers: [
        { provide: NG_VALIDATORS, useExisting: EqualValidator, multi: true }
    ]
})
export class EqualValidator implements Validator {
    @Input() validateEqual: string;
    @Input() reverse: boolean;
    constructor() { }

    validate(control: AbstractControl): { [key: string]: any } {
        let selfValue = control.value;
        let targetControl = control.root.get(this.validateEqual);
        if (targetControl && selfValue !== targetControl.value) {
            if (!this.reverse) {
                return {
                    validateEqual: false
                }
            } else {
                targetControl.setErrors({
                    validateEqual: false
                })
            }
        } else {
            targetControl.setErrors(null);
        }
        return null;
    }
}
