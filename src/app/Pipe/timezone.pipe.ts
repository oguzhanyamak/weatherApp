import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timezone'
})
export class TimezonePipe implements PipeTransform {

  date:Date = {} as Date;;
  transform(value: number, ...args: unknown[]): unknown {
    this.date = new Date(value*1000);
    return this.date.toLocaleTimeString();
  }

}
