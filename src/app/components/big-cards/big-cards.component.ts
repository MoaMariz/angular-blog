import { Component, Input } from '@angular/core';

@Component({
  selector: 'big-cards',
  standalone: true,
  imports: [],
  templateUrl: './big-cards.component.html',
  styleUrl: './big-cards.component.css'
})
export class BigCardsComponent {

  @Input()
  imgCover: string = ""
  @Input()
  cardTitle: string = " TITULO PLACEHOLDER"
  @Input()
  cardDescription: string = "Descrição PLACEHOLDER"

  constructor() { }

}
