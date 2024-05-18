import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from "../../data/datafake"

@Component({
  selector: 'content-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})

export class ContentPage implements OnInit{

  imgCover: string = ""
  contentTitle: string = ""
  contentDescription: string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute  
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = (value.get("id"))
    )
    this.setValuestoComponent(this.id)
  }

  setValuestoComponent (id: string | null){
    const result = dataFake.filter(
                    article => article.id == id)[0]
      
        this.contentTitle = result.contentTitle
        this.imgCover = result.imgCover
        this.contentDescription = result.contentDescription
      }
}
 
