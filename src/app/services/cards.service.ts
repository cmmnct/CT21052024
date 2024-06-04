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
        map((cards) => JSON.parse(JSON.stringify(cards.concat(cards))))
        );
  }
  constructor() {}
}
