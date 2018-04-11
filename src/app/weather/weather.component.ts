import { Component, OnInit, Input } from '@angular/core';
import { DarkSkyApiService } from '../dark-sky-api.service';
import { darkSkyKey } from '../api-keys'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [ DarkSkyApiService ]
})
export class WeatherComponent implements OnInit {
  @Input() childLatLng: string[];
  weatherReport;

  constructor(private darkSkyApi: DarkSkyApiService) { }

    getCurrentWeather(lat:string, lng:string, API_Key:string) {
      this.weatherReport = this.darkSkyApi.getWeather(lat, lng, API_Key)
      console.log(this.weatherReport);
      }

  ngOnInit() {
    this.getCurrentWeather(this.childLatLng[0], this.childLatLng[1], darkSkyKey);
  }

}
