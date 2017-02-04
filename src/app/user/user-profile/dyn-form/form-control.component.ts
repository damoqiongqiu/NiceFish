import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Base } from './field'; 

@Component({
    selector: 'form-control',
    templateUrl: 'form-control.component.html'
})
export class FormControlComponent implements OnInit {
    @Input() field: Base<any>;
    @Input() form: FormGroup;

    constructor() { }

    ngOnInit() { }

}