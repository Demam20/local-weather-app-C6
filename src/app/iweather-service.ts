import { Observable } from 'rxjs';
import { ICurrentWeather } from './icurrent-weather';

export interface IWeatherService {
  getCurrentWeather(searchText:string | number, country?:string):
  Observable<ICurrentWeather>
}
