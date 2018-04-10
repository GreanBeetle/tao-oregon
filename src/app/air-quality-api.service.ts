import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { airPollutionKey } from './api-keys';

@Injectable()
export class AirQualityApiService {

  constructor(private http: Http) { }

  getAirQualityByLatLong(lat:string, lng:string) {
    return this.http.get(`http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lng}&key=${airPollutionKey}`)
  };

}
