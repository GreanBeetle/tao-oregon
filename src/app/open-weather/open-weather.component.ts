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
  currentWeather: string;

  constructor(private openWeatherService: OpenWeatherService) { }

  ngOnInit() {
    this.openWeatherService.getWeather(this.childLatLng[0],this.childLatLng[1]).subscribe(result => {
      this.currentWeather = result.json().main.temp;
    console.log('open weather ',this.currentWeather)
  }); 
  }

}
