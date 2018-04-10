import { Pipe, PipeTransform } from '@angular/core';
import { Trail } from './models/trail.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(input: Trail[], params) {
    let output: Trail[] = [];
    output = input.filter(trail => trail.name.toLowerCase().includes(params.name.toLowerCase()))
    console.log(output);
    return output;
  }
}
