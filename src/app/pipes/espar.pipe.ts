import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'espar'
});
export class EsParPipe implements PipeTransform{
    transform(value: any){
        if (value%2==0) {
            return "El a#o es:"+ value;
        } else {
            return "El anioo es: "+ value;
        }
        
    }
}