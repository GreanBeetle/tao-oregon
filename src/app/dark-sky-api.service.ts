import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { darkSkyKey } from './api-keys';

@Injectable()
export class DarkSkyApiService {
  public async getWeather(lat:string, lng:string): Promise<any> {
    const url = `https://fire-storm.glitch.me/weather-search`
    const request = new Request(url, {
      headers: {"API_Key": darkSkyKey, "longitude":lng, "latitude":lat}
    });
      const response: Response = await fetch(request);
      if (response){
        return await response.json(); //json part of response object. it is a method on response object that parses response.
      }
      return Promise.reject("Fetch request failed");
  }
  // constructor(private http: Http) { }
  //
  // getWeather(lat:string, lng:string) {
  //   return this.http.get(`https://api.darksky.net/forecast/${darkSkyKey}/${lat},${lng}?exclude=flags,minutely,hourly`)
  // }
}
