import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({name: 'dateTransform'})
export class DateTransform implements PipeTransform {
  transform(value) {
    let newStr: string = "";
    newStr = moment(value).format("MMM DD")
    return newStr;
  }
}