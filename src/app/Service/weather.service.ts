import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WeatherResponse } from '../Interface/WeatherResponse';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _Http:HttpClient) { }
  apiKey:string = "29cf6902c295b71471e71a84e950c08e";
  callUrl:string = "" as string;
  datas:any;
  
  getWeatherData(cityName:string,language:string = "tr",unit:string="metric"):Observable<WeatherResponse>{
    this.callUrl= `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}&lang=${language}&units=${unit}`;
    console.log(this.callUrl);
    return this._Http.get<WeatherResponse>(this.callUrl);
  }

}
//