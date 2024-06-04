import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shuffle',
  standalone: true
})
export class ShufflePipe implements PipeTransform {

  transform(array:any[] | null){
    return shuffle(array);
  }

}

export function shuffle(array: any[] | null) {
  if (!array) {
    array = [];
  }
  let m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
