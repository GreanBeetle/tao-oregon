import { Injectable } from '@angular/core';
import { HaversineService, GeoCoord } from "ng2-haversine";

@Injectable()
export class DistanceService {

  constructor(public haversineService: HaversineService) { }

  degreeToRadius(deg) {
    return deg * (Math.PI/180);
  }

  // HAVERSINE OPTION 1
  distanceBetween(trailLocation, userLocation){
    let lat1 = trailLocation.lat;
    let lon1 = trailLocation.lng;
    let lat2 = userLocation.lat;
    let lon2 = userLocation.lng;
    let R = 3959;
    let dLat = this.degreeToRadius(lat2-lat1);
    let dLon = this.degreeToRadius(lon2-lon1);
    let a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.degreeToRadius(lat1)) * Math.cos(this.degreeToRadius(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    let d = R * c;
    return d;
  }

  // HAVERSINE OPTION 2
  distanceBetween2(trailLocation, userLocation){

    let trail : GeoCoord = {
      latitude: trailLocation.lat,
      longitude: trailLocation.lng
    }

    let user : GeoCoord = {
      latitude: userLocation.lat,
      longitude: userLocation.lng
    }

    let miles = this.haversineService.getDistanceInMiles(trail, user);
    console.log("HERE ARE YOUR MILES: ", miles);
    return miles;
  }

}
