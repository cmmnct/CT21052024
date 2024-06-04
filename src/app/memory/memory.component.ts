import { Component, inject, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ShufflePipe } from '../pipes/shuffle.pipe';

@Component({
  selector: 'app-memory',
  standalone: true,
  imports: [AsyncPipe, CardComponent, ShufflePipe],
  templateUrl: './memory.component.html',
  styleUrl: './memory.component.css'
})
export class MemoryComponent implements OnInit {

  cardsService = inject(CardsService);
  cards$!: Observable<Card[]>
  
  ngOnInit(): void {
    // haal de kaartjes uit de service op
    this.cards$ = this.cardsService.getCards$()
  }

}

export type Card = {
  picture: string,
  hidden?: boolean,  
  exposed?:boolean
}
