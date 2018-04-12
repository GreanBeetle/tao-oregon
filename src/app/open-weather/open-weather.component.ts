import { Component, OnInit, Input } from '@angular/core';
import { OpenWeatherService } from '../open-weather.service'

@Component({
  selector: 'app-open-weather',
  templateUrl: './open-weather.component.html',
  styleUrls: ['./open-weather.component.css'],
  providers: [OpenWeatherService]
})
export class OpenWeatherComponent implements OnInit {
  @Input() childLatLng: string;
  currentTemp: string;
  currentWeatherDesc: string;
  weatherForecast: string;
  forecastDate: string;
  forecastArr: number[] = [];



  constructor(private openWeatherService: OpenWeatherService) { }

  ngOnInit() {
    this.openWeatherService.getWeather(this.childLatLng[0],this.childLatLng[1]).subscribe(result => {
      this.currentTemp = result.json().main.temp;
      this.currentWeatherDesc = result.json().weather[0].description;
  });

    this.openWeatherService.getForecast(this.childLatLng[0],this.childLatLng[1]).subscribe(result => {
       let results = result.json();
       console.log(results);
       let list = results.list;
       var i;
       for ( i=0; i<list.length; i++) {
          console.log(list[i].main.temp);
          this.forecastArr.push({Temp: list[i].main.temp, Time : list[i].dt_txt});
       }
       console.log(this.forecastArr);
      // console.log(this.weatherForecast.list[0].dt_txt);


  });
  }

  getCurrentForecast() {
    for (let i=0; i<this.weatherForecast.list.length; i += 8) {
      this.forecastArr.push(this.weatherForecast.list[i]);
    }
    console.log(this.forecastArr);
  }
}
