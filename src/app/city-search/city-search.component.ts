import { Component, OnInit, Output ,EventEmitter
} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { WeatherService } from '../weather.service';
import { debounceTime} from'rxjs/operators';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl('',[Validators.minLength(3)]);
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(
      (searchValue: string) =>{
        if (!this.search.invalid && searchValue){
          this.searchEvent.emit(searchValue);  
          
        }
      }
    )
  }

}
