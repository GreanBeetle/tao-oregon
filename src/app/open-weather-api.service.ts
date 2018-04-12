import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { openWeatherKey } from './api-keys';

@Injectable()
export class OpenWeatherApiService {

  constructor(private http: Http) { }

  getCurrentWeather(lat:string, lng:string) {
    return this.http.get(`api.openweathermap.org/data/2.5/weather?id=524901&APPID=${openWeatherKey}&lat=${lat}&lon=${lng}&units=imperial`)
  }

}
