import { NgModule } from '@angular/core';
import { ButtonAtomComponent } from './atoms/components/button-atom.component';
import { InputAtomComponent } from './atoms/components/input-atom.component';
import { LabelAtomComponent } from './atoms/components/label-atom.component';
import { InputMoleculeComponent } from './molecules/atoms/components/input-molecule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ButtonAtomComponent,
        InputAtomComponent,
        LabelAtomComponent,
        InputMoleculeComponent
    ],
    providers: [
    ],
    exports: [
        ButtonAtomComponent,
        InputMoleculeComponent
    ]
})
export class SharedModule {

}
  