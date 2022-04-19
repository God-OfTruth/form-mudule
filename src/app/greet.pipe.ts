import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet'
})
export class GreetPipe implements PipeTransform {

  transform(val: string, g: string): unknown {
    return g+" "+ val;
  }

}
