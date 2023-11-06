import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from './weather.services';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  selectedCountry: any = "";
  weatherData: any;

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedCountry = params.get('country');
      this.getWeatherData(this.selectedCountry);
    });
  }

  getWeatherData(country: string): void {
    this.weatherService.getWeather(country).subscribe(data => {
      this.weatherData = data;
    });
  }
}
