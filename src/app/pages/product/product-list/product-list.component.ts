import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { WATCH } from 'src/app/core/models/watch.model';
import { selectorWatches } from 'src/app/core/service/selectors/select.watches';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
pageSize=6;
currentItems:number=1;
watches:any;
itemsWatches:WATCH[]=[];
length=0;
  constructor(public Store :Store , private rout:ActivatedRoute) { }
  ngOnInit(): void {

  

    this.rout.queryParams.subscribe((url)=>{
      if(url.filter){
        this.Store.select(selectorWatches).subscribe((it)=>{
          this.watches=it.filter((v)=>{
            return v.name.includes(url.filter)
          });
        })

      }else{
    this.Store.select(selectorWatches).subscribe((it)=>{
          this.watches=it;
        })

      }
      this.GetItems(0,this.pageSize)
      this.length=Math.round(this.watches.length/this.pageSize)
    })


    
    
  }
 

GetItems(start:number,end:number):void{
this.itemsWatches=this.watches.slice(start,end)
  }


  pageChange(page:PageEvent){

let current = page.pageIndex;
this.pageSize=page.pageSize;
let start=current*this.pageSize;
let end = current*this.pageSize+this.pageSize;
  this.GetItems(start,end)
  }









  DisplayFilter(v:number){

    this.currentItems=v;
    console.log(this.currentItems)
  }  

}
