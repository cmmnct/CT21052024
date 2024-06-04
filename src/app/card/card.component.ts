import { Component, Input } from '@angular/core';
import { Card } from '../memory/memory.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input({required:true}) card!:Card
 }
