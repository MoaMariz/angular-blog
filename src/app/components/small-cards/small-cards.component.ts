import { Component, Input } from '@angular/core';

@Component({
  selector: 'small-cards',
  standalone: true,
  imports: [],
  templateUrl: './small-cards.component.html',
  styleUrl: './small-cards.component.css'
})
export class SmallCardsComponent {

  @Input()
  imgCover: string = ""
  @Input()
  smallCardTitle: string = ""
  @Input()
  smallCardDescription: string = ""

  constructor() { }

}
