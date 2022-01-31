import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
    name: 'format',
})
export class FormatPipe implements PipeTransform {
  
  transform(value: string, args:number = 10, args2:string = '...'): string {

    console.log('pipe invoked');
    return value.slice(0,args) + args2;
  }
  
}