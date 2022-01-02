import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number): string {
    let s = value.toString().split('.');
    let result = '';
    if (s.length == 2) {
      result = s[0] + 'GP ' + s[1] + 'SP';
    } else if (s.length == 1) {
      result = s[0] + 'GP';
    }
    
    return result;
  }

}
