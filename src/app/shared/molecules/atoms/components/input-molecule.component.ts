import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'input-molecule',
    templateUrl: '../resources/input-molecule.component.html',
    styleUrls: ['../resources/styles/input-molecule.component.less']
})
export class InputMoleculeComponent{

    @Input() id: string;
    @Input() label: string;
    @Input() name: string;
    @Input() parentForm: FormGroup;
}