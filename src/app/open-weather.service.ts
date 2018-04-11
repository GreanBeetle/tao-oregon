import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { openWeatherKey } from './api-keys';

@Injectable()
export class OpenWeatherService {

  constructor(private http: Http) { }

  getWeather(lat:string, lng:string) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${openWeatherKey}&units=imperial`)
  }
}
