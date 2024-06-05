import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { Observable } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf, AsyncPipe],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items$!: Observable<string[]>;
  filterControl: FormControl = new FormControl('');

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.filterService.setItems([
      'Apple',
      'Banana',
      'Cherry',
      'Date',
      'Elderberry',
    ]);
    this.items$ = this.filterService.getFilteredItems();

    this.filterControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.filterService.setFilter(value);
      });
  }
}
