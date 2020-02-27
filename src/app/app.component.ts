import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'local Weather';
  currentWeather: import("c:/Users/doaae/OneDrive/github/webC6/local-weather-app/src/app/icurrent-weather").ICurrentWeather;
  constructor(private weatherService:WeatherService){}
  doSearch(searchValue){
     const userInput = searchValue.split(',').map(s=>s.trim());
     this.weatherService.getCurrentWeather(
       userInput[0],
       userInput.length > 1 ?userInput[1]: undefined).
       subscribe(data => this.currentWeather = data);
  }

}
