import { Pipe, PipeTransform } from '@angular/core';
import { Trail } from './models/trail.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(input: Trail[], params) {
    let output: Trail[] = input;
    if(params){
      if(params.name != ""){
        output = output.filter(trail => trail.name.toLowerCase().includes(params.name.toLowerCase()))
      }
      if(params.trailLength != ""){
        output = output.filter(trail =>
          trail.length < params.trailLength
        )
      }
    }
    return output;
  }
}
