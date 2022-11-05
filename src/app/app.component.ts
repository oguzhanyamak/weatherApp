import { Component } from '@angular/core';
import { WeatherResponse } from './Interface/WeatherResponse';
import { WeatherService } from './Service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherApp';
  backgroundImage:string = "";
  response: WeatherResponse = {} as WeatherResponse;
  constructor(private service: WeatherService) { }


  getWeatherReport(name: string) {
    this.service.getWeatherData(name).subscribe({
      next: (data) => {
        this.response = data;
        this.setbackgroundimage();
      }, error: (error) => console.log(error), complete: () => console.info("Complete")
    });
    console.log(this.response.weather[0].main);
  }
  setbackgroundimage() {
    switch (this.response.weather[0].main) {
      case "Thunderstorm":
        this.backgroundImage = './assets/thunderstorm.jpg';
        break;
      case "Drizzle":
        this.backgroundImage = './assets/rain.jpg';
        break;
      case "Rain":
        this.backgroundImage = './assets/rain.jpg';
        break;
      case "Snow":
        this.backgroundImage = './assets/snow.jpg';
        break;
      case "Clear":
        this.backgroundImage = './assets/clearsky.jpg';
        break;
      default:
        this.backgroundImage = './assets/clouds.jpg';
        break;
    }
    console.log(this.backgroundImage);
  }
}
//https://stackoverflow.com/questions/28952550/how-to-convert-utc-timestamp-only-into-local-time-on-the-web-with-javascript
//https://stackblitz.com/edit/dynamic-background-image-not-working-angular-5?file=src%2Fapp%2Fapp.component.html