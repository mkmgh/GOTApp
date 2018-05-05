import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpGotService } from '../http-got.service';

import {Location} from '@angular/common';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css'],
  providers: [Location]
})
export class BookViewComponent implements OnInit, OnDestroy {
//empty object
  public currentBook:any[]=[];
  public defaultValue: string = "None";

  constructor(private _route:ActivatedRoute, private _router: Router, public httpGotService:HttpGotService, public location:Location) { 
    console.log("Book-view constructor called");
  }

  ngOnInit() {
    console.log("Book-view ngOnInit called");
    let bookNumber = this._route.snapshot.paramMap.get('bookNumber');
    console.log(bookNumber);

    this.httpGotService.getSingleBook(bookNumber).subscribe(

      data=>{
        this.currentBook=data;
        console.log(this.currentBook);
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }

    )
  }

  ngOnDestroy(){

  }

  public goBackToPreviousPage():any{
    this.location.back();
  }

}
