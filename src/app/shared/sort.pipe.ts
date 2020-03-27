import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })
export class MyOrderByPipe implements PipeTransform {
  transform(items: any[], field: string): any[] {
    console.log("inside the pipe --- "+field)
    if (!items) return [];

    if (field){
      items.sort((a, b) => a[field] > b[field] ? 1 : -1);
      console.log("inside if conditon"+items.sort((a, b) => a[field] > b[field] ? 1 : -1));
    } 
    else {
      items.sort((a, b) => a > b ? 1 : -1);
      console.log("outside if conditon");
    }
    console.log("inside the pipe --- "+items)
    return items.reverse();
  }
}