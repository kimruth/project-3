import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'word'
})
export class WordPipe implements PipeTransform {

  transform(value: string, ..._args: unknown[]): unknown {
    
    const arrayValue = value.split(' ');
    if (arrayValue.length > 20) {
      const newArrayValue = arrayValue.slice(0, 19);
      return newArrayValue.join(' ').toString() + ' ...';
    }

    return value;
  }
}
