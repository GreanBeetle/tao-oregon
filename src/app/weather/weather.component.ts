import { Component, OnInit, Input } from '@angular/core';
import { DarkSkyApiService } from '../dark-sky-api.service';

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

    getWeather(lat:string, lng:string) {
      this.weatherReport = this.darkSkyApi.getWeather(lat, lng)
      console.log(this.weatherReport);
      }

  ngOnInit() {
    this.getWeather(this.childLatLng[0], this.childLatLng[1]);
  }

}
