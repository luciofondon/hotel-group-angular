import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'input-atom',
    templateUrl: '../resources/input-atom.component.html',
    styleUrls: ['../resources/styles/input-atom.component.less']
})
export class InputAtomComponent{

    @Input() id: string;
    @Input() value: string;
    @Input() name: string;

  

}