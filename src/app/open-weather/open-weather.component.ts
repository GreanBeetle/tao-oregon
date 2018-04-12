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
       for ( i=0; i<list.length; i+=8) {
          this.forecastArr.push(list[i]);
       }
       console.log(this.forecastArr);
  });
  }

  convertDate(unixDate) {
    let date = new Date(unixDate*1000);
    return date;
  }
}
