import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'exponentialStrength'})
export default class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent = 1, multiply = 1, addition = 1): number {
    return Math.pow(value, exponent) * multiply + addition;
  }
}
