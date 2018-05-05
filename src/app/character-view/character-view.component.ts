import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpGotService } from '../http-got.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css'],
  providers: [Location]
})
export class CharacterViewComponent implements OnInit, OnDestroy {

  public currentCharacter:any[]=[];
  public defaultValue: string = "None";

  constructor(private _route:ActivatedRoute, private _router:Router, public httpGotService : HttpGotService, public location : Location) {
    console.log("character-view constructor called");
   }

  ngOnInit() {
    console.log("character-view ngOnInit called");
    let characterNumber = this._route.snapshot.paramMap.get('characterNumber')

    this.httpGotService.getSingleCharacter(characterNumber).subscribe(
      data=>{
        this.currentCharacter=data;
        console.log(this.currentCharacter);
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }


    );

  }

  ngOnDestroy(){

  }

  public goBackToPreviousPage(){
    this.location.back();
  }
}
