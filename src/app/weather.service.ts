import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICurrentWeatherData } from './icurrent-weather-data';
import { ICurrentWeather} from './icurrent-weather';
import{Observable, pipe}from 'rxjs';
import{map} from 'rxjs/operators';
import { IWeatherService } from './iweather-service';
@Injectable({
  providedIn: 'root'
})
export class WeatherService implements IWeatherService {

  constructor(private httpClient:HttpClient) { }

  getCurrentWeather(searchText:string | number, country?: string):
  Observable<ICurrentWeather>{
    let uriParams ='';
    if (typeof searchText ==='string'){
      uriParams = `q=${searchText}`;

    } else {
      uriParams = `zip=${searchText}`
    }
    if (country){
      uriParams =`${uriParams},${country}`;
    }


    
     var response = this.httpClient.get<ICurrentWeatherData>(
      `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?${uriParams}&appid=${environment.appId}`
    )
    console.log(response);
    return response.pipe(map(data=> this.tansformToICurrentWeather(data)));
  }

  private tansformToICurrentWeather(data:ICurrentWeatherData) :ICurrentWeather{
    


    return{

      city: data.name,
      country: data.sys.country,
      date: data.dt *1000,
      image: `http:openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description
    }
  }

  private convertKelvinToFahrenheit(Kelvin: number): number{
    return Kelvin * 9/ 5-459.67;
  }
}


