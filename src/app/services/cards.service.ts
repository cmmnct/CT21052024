import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Card } from '../memory/memory.component';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  http: HttpClient = inject(HttpClient);
  cardUrl = 'https://my-json-server.typicode.com/cmmnct/memorycards/cards';

  getCards$(): Observable<Card[]> {
    return this.http
      .get<Card[]>(this.cardUrl)
      .pipe(
        map((cards) => JSON.parse(JSON.stringify(shuffle(cards.concat(cards)))))
      );
  }
  constructor() {}
}

export function shuffle(array:any[]) {
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
