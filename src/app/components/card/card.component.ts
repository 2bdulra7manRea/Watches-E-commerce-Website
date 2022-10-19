import { Component, Input, OnInit } from '@angular/core';
import { faHeart , faGrinHearts } from '@fortawesome/free-solid-svg-icons';
import { WATCH } from 'src/app/core/models/watch.model';
@Component({
  selector: 'app-card-menu',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
Fheart=faHeart;
@Input() item:WATCH={imgUrl:"" , description:"" , discount:0, name:"No item" , price:1000, id:""}
  constructor() { }

  ngOnInit(): void {
  }

}
