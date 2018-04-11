import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { darkSkyKey } from './api-keys';

@Injectable()
export class DarkSkyApiService {

  constructor(private http: Http) { }

  getWeather(lat:string, lng:string) {
    return this.http.get(`https://api.darksky.net/forecast/${darkSkyKey}/${lat},${lng}?exclude=flags,minutely,hourly`)
  }
}
