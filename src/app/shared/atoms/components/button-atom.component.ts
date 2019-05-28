import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'button-atom',
    templateUrl: '../resources/button-atom.component.html',
    styleUrls: ['../resources/styles/button-atom.component.less']
})
export class ButtonAtomComponent{

    @Input() label: string;
    @Output() click : EventEmitter<any> = new EventEmitter();
   
    ngOnInit() {
        console.log('This if the value: ' + this.label);
    }

   
    
}