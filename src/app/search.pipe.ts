import { Pipe, PipeTransform } from '@angular/core';
import { Trail } from './models/trail.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(input: Trail[], params) {
    let output: Trail[] = [];

    if(params){
      output = input.filter(trail => trail.name.toLowerCase().includes(params.name.toLowerCase()))
      return output;
    } else{
      return input;
    }
  }
}
