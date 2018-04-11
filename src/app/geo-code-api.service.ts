import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class GeoCodeApiService {
  location: any;

  constructor(private http: Http) { }

  getLatLon(location: string) {
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyAYz6TiAFQf-9Fn6AwgXrg-FOCQNaFYSvk`);
  }
}
