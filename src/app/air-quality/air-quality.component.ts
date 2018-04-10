import { Component, OnInit, Input } from '@angular/core';
import { AirQualityApiService } from '../air-quality-api.service';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.css'],
  providers: [ AirQualityApiService ]
})
export class AirQualityComponent implements OnInit {
  @Input() childLatLng: string[];
  airQualityReport: any[]=null;

  constructor(private airQualityApi: AirQualityApiService) { }

  getAqi(lat:string, lng:string) {
    this.airQualityApi.getAirQualityByLatLong(lat, lng).subscribe(response => {
      this.airQualityReport = response.json();

    });
  }

  ngOnInit() {

    this.getAqi(this.childLatLng[0], this.childLatLng[1] );
  }

}
