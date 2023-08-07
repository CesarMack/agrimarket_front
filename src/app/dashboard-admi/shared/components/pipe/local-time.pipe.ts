import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localTime',
})
export class LocalTimePipe implements PipeTransform {
  transform(utcTime: string): string {
    const localTime = new Date(utcTime + 'Z');
    return localTime.toLocaleString();
  }
}
