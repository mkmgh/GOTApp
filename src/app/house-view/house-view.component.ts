import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpGotService } from '../http-got.service';

import { Location } from '@angular/common'

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css'],
  providers: [Location]
})
export class HouseViewComponent implements OnInit, OnDestroy {

  private currentHouse:any[]=[];
  public defaultValue: string = "None";
  constructor( private _route:ActivatedRoute, private _router:Router, public httpGotService : HttpGotService , private location: Location) {
    console.log("House-view constructor called");
   }

  ngOnInit() {
    console.log("house-View ngOnInit called");
    let houseNumber = this._route.snapshot.paramMap.get('houseNumber')
    console.log(houseNumber);

    this.httpGotService.getSingleHouse(houseNumber).subscribe(

      data=>{
        this.currentHouse=data;
        console.log(this.currentHouse);
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }

    )    

  }


  public goBackToPreviousPage():any{
    this.location.back();
  }

  ngOnDestroy(){

  }

}
