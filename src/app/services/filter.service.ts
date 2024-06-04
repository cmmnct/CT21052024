import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private itemsSubject = new BehaviorSubject<string[]>([]);
  private filterSubject = new BehaviorSubject<string>('');

  setItems(items: string[]) {
    this.itemsSubject.next(items);
  }

  setFilter(filter: string) {
    this.filterSubject.next(filter);
  }

  getFilteredItems(): Observable<string[]> {
    return combineLatest([
      this.itemsSubject,
      this.filterSubject.pipe(startWith('')),
    ]).pipe(
      map(([items, filterText]) =>
        items.filter((item) =>
          item.toLowerCase().includes(filterText.toLowerCase())
        )
      )
    );
  }

  getFilter(): Observable<string> {
    return this.filterSubject.asObservable();
  }
}
