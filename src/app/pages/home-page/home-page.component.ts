import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { selectorWatches } from 'src/app/core/service/selectors/select.watches';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
watches:any;
hour:string="";
minuts:string="";
second:string="";
Time:string='';
  constructor(private Store:Store) {
    
   }


  ngOnInit(): void {

this.Store.select(selectorWatches).subscribe((v)=>{
this.watches=v.slice(0,6);
})


this.Time=moment().format('ddd. D MMM YYYY')

    setInterval(()=>{
      this.second= moment().format('ss');
      this.hour= moment().format('hh');
      this.minuts= moment().format('mm');

    },1000)

  }




}
