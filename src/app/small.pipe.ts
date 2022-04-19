import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'small'
})
export class SmallPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value+'HELLO';
  }

}
