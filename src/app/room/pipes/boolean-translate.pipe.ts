import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'booleanTranslate'})
export class BooleanTranslatePipe implements PipeTransform {
    transform(value) {
        return value ? 'Sí' : 'No';
    }
}