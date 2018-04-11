import { Pipe, PipeTransform } from '@angular/core';
import { Trail } from './models/trail.model';
import  { DistanceService } from './distance.service';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  constructor(private distanceService: DistanceService) { }

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
      if(params.userLocation != "" && params.maxDistance != ""){
        // console.log(this.distanceService.distanceBetween2(trail.coordinates, params.userLocation))
        output = output.filter(trail =>
          this.distanceService.distanceBetween(trail.coordinates, params.userLocation) < params.maxDistance
        )
      }
    }
    return output;
  }
}
