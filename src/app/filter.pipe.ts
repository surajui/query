import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args:string): any {
    return value ? value.filter(item=>item.fullname.search(new RegExp(args))>-1):[];
  }

}
