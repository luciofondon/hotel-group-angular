import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'label-atom',
    templateUrl: '../resources/label-atom.component.html',
    styleUrls: ['../resources/styles/label-atom.component.less']
})
export class LabelAtomComponent{

    @Input() label: string;
    @Input() id: string;

}