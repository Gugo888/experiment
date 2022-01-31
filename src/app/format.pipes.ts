import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
    name: 'format'
})
export class FormatPipe implements PipeTransform {

   
  transform(value: string, args?: any): string {
     if(value.length > 10) {
        value = value.slice(0,10);
        return value + '...'
     }
    return value 
  }
  
}